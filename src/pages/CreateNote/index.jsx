import React, { useState, useEffect, useCallback } from 'react';
import Switch from 'react-switch';
import Header from '../../components/Header';
import TagManipulationInterface from '../../components/TagManipulationInterface';
import SavePanel from '../../components/SavePanel';
import {
  Container,
  ContentContainer,
  SwitchLabel,
  SwitchContainer,
  TitleInput,
  TagsContainer,
  EditorContainer,
  StyledTag,
  LinkURL,
} from './styles';
import getEditor from '../../services/editorjs';
import api from '../../services/api';

const CreateNote = () => {
  const [isLink, setIsLink] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [linkURLInputValue, setLinkURLInputValue] = useState('');
  const [newNoteData, setNewNoteData] = useState({});
  const [setDataTimeout, setSetDataTimeout] = useState(null);
  const [noteContent, setNoteContent] = useState({});
  const [noteTags, setNoteTags] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get('/tags');

      setUserTags(data.tags);
    };

    getData();
  }, []);

  useEffect(() => {
    if (!isLink && !editor && titleInputValue.length) {
      const newEditor = getEditor('editor', {});
      setEditor(newEditor);
      return;
    }

    if (isLink) {
      setEditor(null);
    }

    if (!titleInputValue.length) {
      setEditor(null);
    }
  }, [isLink, titleInputValue]);

  useEffect(() => {
    if (setDataTimeout) {
      clearTimeout(setDataTimeout);
    }
    const dataTimeout = setTimeout(() => {
      setNewNoteData(prev => {
        const newData = { ...prev };
        if (titleInputValue) {
          newData.title = titleInputValue;
        }

        if (noteTags.length) {
          newData.tags = [...noteTags];
        }

        newData.isLink = isLink;

        if (editor && editor.save) {
          editor.save().then(outputData => {
            newData.content = outputData;
          });
        }

        if (isLink && linkURLInputValue) {
          newData.content = {
            url: linkURLInputValue,
          };
        }

        return newData;
      });
    }, 500);

    setSetDataTimeout(dataTimeout);
  }, [
    linkURLInputValue,
    titleInputValue,
    isLink,
    noteContent,
    editor,
    noteTags,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (editor) {
        editor.save().then(outputData => {
          setNoteContent(outputData);
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [editor]);

  const handleTitleInputValue = useCallback(
    e => {
      setTitleInputValue(e.target.value || '');
    },
    [setTitleInputValue],
  );

  return (
    <>
      <Container>
        <Header title="Criar nota" />
        <ContentContainer>
          <SwitchContainer>
            <SwitchLabel>
              {`Nov${isLink ? 'o' : 'a'} ${isLink ? 'link' : 'nota'}`}
            </SwitchLabel>

            <Switch
              checked={isLink}
              onChange={() => {
                setIsLink(prev => !prev);
              }}
              offColor="#E36396"
              onColor="#557DAC"
              uncheckedIcon={false}
              checkedIcon={false}
              draggable={false}
            />
          </SwitchContainer>

          <TitleInput
            name="title"
            placeholder={`Digite o título d${isLink ? 'o' : 'a'} ${
              isLink ? 'link' : 'nota'
            } `}
            value={titleInputValue}
            onChange={handleTitleInputValue}
          />

          {!!titleInputValue.length && (
            <TagsContainer>
              <TagManipulationInterface
                setSelectedTags={setNoteTags}
                selectedTags={noteTags}
                setApiTags={setUserTags}
                apiTags={userTags}
              />
              {noteTags &&
                userTags.map(tag => {
                  if (noteTags.includes(tag.name)) {
                    return (
                      <StyledTag key={tag.id} color={tag.color}>
                        <span>{tag.name}</span>
                      </StyledTag>
                    );
                  }
                })}
            </TagsContainer>
          )}

          {!!titleInputValue.length && !isLink && (
            <EditorContainer id="editor" />
          )}
          {!!titleInputValue.length && isLink && (
            <LinkURL
              placeholder="Digite uma URL"
              value={linkURLInputValue}
              onChange={e => {
                setLinkURLInputValue(e.target.value || '');
              }}
            />
          )}
        </ContentContainer>
        <SavePanel data={newNoteData} />
      </Container>
    </>
  );
};

export default CreateNote;
