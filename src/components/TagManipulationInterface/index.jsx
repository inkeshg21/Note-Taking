import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiPlusCircle, FiChevronDown } from 'react-icons/fi';
import { BiPlusMedical } from 'react-icons/bi';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import {
  Container,
  InterfaceButton,
  InterfaceContainer,
  TagCreationContainer,
  TagCreationInput,
  ColorSelectorContainer,
  ColorButton,
  StyledBlockPicker,
  TagSelectContainer,
  StyledTag,
  CreateTagButton,
} from './styles';
import api from '../../services/api';

const TagManipulationInterface = ({
  setSelectedTags,
  selectedTags,
  apiTags,
  setApiTags,
}) => {
  const [showInterface, setShowInterface] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [userTags, setUserTags] = useState(null);
  const [tagNameInputValue, setTagNameInputValue] = useState('');
  const [tagColor, setTagColor] = useState('CCCCCC');

  useEffect(() => {
    if (apiTags) {
      setUserTags([...apiTags]);
    }
  }, [apiTags]);

  const handleTagCreate = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        name: yup
          .string()
          .required('Uma tag precisa obrigatoriamente de um nome '),
        color: yup.string().required('Cor da tag inválida'),
      });

      const tagData = {
        name: tagNameInputValue,
        color: tagColor,
      };

      await schema.validate(tagData);

      if (
        apiTags.length &&
        apiTags.findIndex(tag => tag.name === tagData.name) !== -1
      ) {
        throw new Error();
      }

      const { data } = await api.post('/tags', tagData);

      if (setApiTags) {
        setApiTags(prev => {
          const newState = [...prev];

          newState.push(data.tag);

          return newState;
        });
      }

      setSelectedTags(prev => {
        const newState = [...prev];

        newState.push(data.tag.name);

        return newState;
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.errors.forEach(errorMessage => {
          toast.error(errorMessage);
        });

        return;
      }

      if (err instanceof Error) {
        toast.error(
          'Uma tag com essas configurações já existe 😴, tente mudá-lás',
        );

        return;
      }

      toast.error('Erro interno do servidor, tente novamente mais tarde.');
    }
  }, [tagNameInputValue, tagColor, setApiTags, setSelectedTags]);

  return (
    <Container>
      <InterfaceButton
        onClick={() => {
          setShowInterface(prev => !prev);
        }}
      >
        <span>Adicionar Tag</span>
        {!showInterface ? (
          <FiPlusCircle color="#ccc" size={30} />
        ) : (
          <FiChevronDown color="#ccc" size={30} />
        )}
      </InterfaceButton>

      {showInterface && (
        <InterfaceContainer>
          <TagCreationContainer>
            <TagCreationInput>
              <input
                type="text"
                name="name"
                placeholder="Nome da tag"
                value={tagNameInputValue}
                onChange={e => {
                  setTagNameInputValue(e.target.value || '');
                }}
              />

              <ColorSelectorContainer>
                <ColorButton
                  onClick={() => {
                    setShowColorPicker(prev => !prev);
                  }}
                  color={tagColor}
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
              </ColorSelectorContainer>
            </TagCreationInput>
            <CreateTagButton onClick={handleTagCreate}>
              <BiPlusMedical color="#fff" size={20} />
            </CreateTagButton>
          </TagCreationContainer>
          <TagSelectContainer>
            {userTags &&
              userTags.map(tag => (
                <StyledTag
                  key={tag.id}
                  setTagsArray={setSelectedTags}
                  tagsArray={selectedTags}
                  color={tag.color}
                  name={tag.name}
                />
              ))}
          </TagSelectContainer>
        </InterfaceContainer>
      )}
    </Container>
  );
};

TagManipulationInterface.propTypes = {
  setSelectedTags: PropTypes.func.isRequired,
  setApiTags: PropTypes.func,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  apiTags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

TagManipulationInterface.defaultProps = {
  setApiTags: null,
};

export default TagManipulationInterface;
