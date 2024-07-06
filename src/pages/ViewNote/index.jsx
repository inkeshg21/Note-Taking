import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import EditPanel from '../../components/EditPanel';
import DeleteNoteConfirmation from '../../components/DeleteNoteConfirmation';
import {
  Container,
  ContentContainer,
  EditorContainer,
  TagsContainer,
  StyledTag,
} from './styles';
import api from '../../services/api';
import getEditor from '../../services/editorjs';

const ViewNote = () => {
  const { noteId } = useParams();
  const [apiData, setApidata] = useState({});
  const [noteInfo, setNoteInfo] = useState(null);
  const [editor, setEditor] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data: noteData } = await api.get(`/notes/${noteId}`);

      setApidata(prev => {
        const newObj = { ...prev };

        newObj.note = noteData.note;

        return newObj;
      });
    };

    getData();
  }, [noteId]);

  useEffect(() => {
    setNoteInfo(apiData.note);
  }, [apiData]);

  useEffect(() => {
    setInterval(() => {
      const links = document.querySelectorAll(
        'div[contenteditable="true"] > a',
      );
      if (links.length) {
        links.forEach(link => {
          link.parentElement.setAttribute('contenteditable', 'false');
        });
      }
    }, 2000);
  }, []);

  useEffect(() => {
    if (noteInfo && noteInfo.content)
      setEditor(getEditor('editor', noteInfo.content));
  }, [noteInfo]);

  return (
    <>
      <Container
        showConfirmation={showDeleteConfirmation}
        height={document.documentElement.scrollHeight}
      >
        <Header title="Visualizar Nota" />
        <ContentContainer>
          <EditorContainer id="editor">
            {noteInfo && <h1>{noteInfo.title}</h1>}
            <TagsContainer>
              {noteInfo &&
                noteInfo.tags.map(tag => (
                  <StyledTag key={tag.id} color={tag.color}>
                    {tag.name}
                  </StyledTag>
                ))}
            </TagsContainer>
          </EditorContainer>
        </ContentContainer>
        <EditPanel
          editor={editor}
          noteId={!!noteInfo ? noteInfo.id : undefined}
          setShowConfirmation={setShowDeleteConfirmation}
        />
        {showDeleteConfirmation && (
          <DeleteNoteConfirmation
            setShowConfirmation={setShowDeleteConfirmation}
            showConfirmation={showDeleteConfirmation}
            noteId={noteId}
          />
        )}
      </Container>
    </>
  );
};

export default ViewNote;
