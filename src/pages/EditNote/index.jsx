import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import EditPanel from '../../components/EditPanel';
import TagManipulationInterface from '../../components/TagManipulationInterface';
import DeleteNoteConfirmation from '../../components/DeleteNoteConfirmation';
import {
  Container,
  ContentContainer,
  NoteTitle,
  EditorContainer,
  LinkURLInput,
  TagsContainer,
  StyledTag,
} from './styles';
import api from '../../services/api';
import getEditor from '../../services/editorjs';

const EditNote = () => {
  const { noteId } = useParams();
  const [noteData, setNoteData] = useState(null);
  const [tagsData, setTagsData] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [contentUrlInputValue, setContentUrlInputValue] = useState('');
  const [newNoteData, setNewNoteData] = useState(null);
  const [editor, setEditor] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const noteResponse = await api.get(`/notes/${noteId}`);
      const tagsResponse = await api.get('/tags');

      setNoteData(noteResponse.data.note);

      setTagsData(tagsResponse.data.tags);
    };

    getData();
  }, [noteId]);

  useEffect(() => {
    if (noteData) {
      setTitleInputValue(noteData.title || '');
      setContentUrlInputValue(noteData.content.url || '');
      setSelectedTags(() => {
        const selectedTagsNames = noteData.tags.map(tag => tag.name);
        return selectedTagsNames;
      });

      if (!noteData.isLink) {
        const newEditor = getEditor('editor', noteData.content);
        setEditor(newEditor);
      }
    }
  }, [noteData]);

  useEffect(() => {
    const newNote = {};

    if (selectedTags) {
      newNote.tags = [...selectedTags];
    }

    if (titleInputValue) {
      newNote.title = titleInputValue;
    }

    if (noteData) {
      newNote.isLink = noteData.isLink;
    }

    if (contentUrlInputValue) {
      newNote.content = {
        url: contentUrlInputValue,
      };
    }

    setNewNoteData(newNote);
  }, [selectedTags, titleInputValue, noteData, contentUrlInputValue]);

  return (
    <>
      <Container
        showConfirmation={showDeleteConfirmation}
        height={document.documentElement.scrollHeight}
      >
        <Header title="Editar nota" />
        <ContentContainer>
          <span>Editar nota</span>
          <NoteTitle
            type="text"
            name="noteTitle"
            placeholder="Digite o título da nota"
            value={titleInputValue}
            onChange={e => {
              setTitleInputValue(e.target.value || '');
            }}
          />

          <TagsContainer>
            <TagManipulationInterface
              setSelectedTags={setSelectedTags}
              selectedTags={selectedTags}
              setApiTags={setTagsData}
              apiTags={tagsData}
            />

            {(selectedTags &&
              tagsData &&
              tagsData.map(tag => {
                if (selectedTags.includes(tag.name)) {
                  return (
                    <StyledTag key={tag.id} color={tag.color}>
                      <span>{tag.name}</span>
                    </StyledTag>
                  );
                }
              })) ||
              (noteData &&
                noteData.tags.map(tag => (
                  <StyledTag key={tag.id} color={tag.color}>
                    <span>{tag.name}</span>
                  </StyledTag>
                )))}
          </TagsContainer>

          <EditorContainer
            id="editor"
            style={{ display: noteData && noteData.isLink ? 'none' : 'block' }}
          />
          <LinkURLInput
            type="text"
            name="noteURL"
            onChange={e => {
              setContentUrlInputValue(e.target.value || '');
            }}
            style={{ display: noteData && noteData.isLink ? 'block' : 'none' }}
            value={contentUrlInputValue}
          />
        </ContentContainer>

        <EditPanel
          noteId={noteId}
          editor={editor}
          noteData={newNoteData}
          setShowConfirmation={setShowDeleteConfirmation}
        />

        {showDeleteConfirmation && (
          <DeleteNoteConfirmation
            setShowConfirmation={setShowDeleteConfirmation}
            noteId={noteId}
          />
        )}
      </Container>
    </>
  );
};

export default EditNote;
