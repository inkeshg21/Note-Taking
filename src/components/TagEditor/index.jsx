import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import {
  Container,
  TagPreviewContainer,
  TagPreview,
  TagChangeContainer,
  Input,
  ColorPickerButton,
  SaveButton,
  StyledBlockPicker,
  StyledLoading,
} from './styles';
import api from '../../services/api';

const TagEditor = ({ tagInfo, setTagsInfos, pathname }) => {
  const [loading, setLoading] = useState(false);
  const [tagNameInputValue, settagNameInputValue] = useState(() => {
    if (tagInfo && tagInfo.name) {
      return tagInfo.name;
    }

    return '';
  });
  const [tagColor, setTagColor] = useState(() => {
    if (tagInfo && tagInfo.color) {
      return tagInfo.color;
    }
  });
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [changeTagInfoTimeout, setChangeTagInfoTimeout] = useState(null);
  const tagPreviewContainerRef = useRef(null);

  useEffect(() => {
    clearTimeout(changeTagInfoTimeout);
    const timeout = setTimeout(() => {
      setTagsInfos(prevInfo => {
        if (pathname && prevInfo[pathname]) {
          const newState = { ...prevInfo };

          newState[pathname] = {
            ...newState[pathname],
            name: tagNameInputValue || pathname,
            color: tagColor || 'ccc',
          };

          return newState;
        }
      });
    }, 500);

    setChangeTagInfoTimeout(timeout);
  }, [tagNameInputValue, tagColor, pathname, setTagsInfos]);

  const handleSaveClick = useCallback(async () => {
    try {
      setLoading(prevLoading => {
        if (!prevLoading) {
          return true;
        }

        return prevLoading;
      });

      const schema = yup.object().shape({
        name: yup
          .string()
          .max(
            100,
            'Parece que o nome da sua Tag é muito extenso, tem certeza que precisa de tudo isso? 🤔',
          )
          .required('O nome da tag é obrigatório'),
        color: yup.string().required('Uma cor deve ser escolhida'),
      });

      await schema.validate(tagInfo);

      await api.put(`/tags/${tagInfo.id}`, {
        name: tagInfo.name,
        color: tagInfo.color,
      });

      setTagsInfos(prevState => {
        const newState = { ...prevState };

        delete newState[tagInfo.id];

        return newState;
      });

      toast.success('Tag atualizada com sucesso! ✅');
    } catch (err) {
      if (err instanceof yup.ValidationError && err.errors) {
        err.errors.forEach(errorMessage => {
          toast.error(errorMessage);
        });

        return;
      }
    }
  }, [tagInfo, setTagsInfos]);

  return (
    <Container>
      <TagPreviewContainer
        ref={tagPreviewContainerRef}
        height={
          (tagPreviewContainerRef.current &&
            tagPreviewContainerRef.current.scrollHeight) ||
          0
        }
      >
        <TagPreview color={tagColor}>
          <span>{tagNameInputValue || 'Escolha um nome'}</span>
        </TagPreview>
      </TagPreviewContainer>
      {loading && <StyledLoading />}
      {!loading && (
        <TagChangeContainer>
          <Input>
            <input
              type="text"
              value={tagNameInputValue}
              onChange={e => {
                settagNameInputValue(e.target.value || '');
              }}
            />
            <ColorPickerButton
              color={`#${tagColor}`}
              onClick={() => {
                setShowColorPicker(prev => !prev);
              }}
            />

            {showColorPicker && (
              <StyledBlockPicker
                color={`#${tagColor}`}
                colors={[
                  '#FF7070',
                  '#FFAC70',
                  '#FFD770',
                  '#C9FF70',
                  '#70FFD4',
                  '#C970FF',
                  '#8D70FF',
                  '#70A1FF',
                  '#70D4FF',
                  '#70EEFF',
                ]}
                onChange={color => {
                  setTagColor(color.hex.split('#')[1]);
                }}
                width="250px"
                styles={{
                  default: {
                    head: {
                      height: 'auto',
                      padding: ['80px'],
                    },
                    input: {
                      padding: ['24px', '16px'],
                      borderRadius: '10px',
                      textAlign: 'center',
                      color: '#ccc',
                      height: 'auto',
                      width: '100%',
                    },
                    body: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  },
                }}
              />
            )}
          </Input>
          <SaveButton type="button" onClick={handleSaveClick}>
            <FiCheck color="#fff" size={30} />
          </SaveButton>
        </TagChangeContainer>
      )}
    </Container>
  );
};

TagEditor.propTypes = {
  tagInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  setTagsInfos: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default TagEditor;
