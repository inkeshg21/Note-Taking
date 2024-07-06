import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Editor from '@editorjs/editorjs';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Container,
  LeftButtons,
  CancelButton,
  DeleteButton,
  SaveButton,
} from './styles';

const EditPanel = ({ editor, noteId, setShowConfirmation, noteData }) => {
  const history = useHistory();

  const handleCancelClick = useCallback(() => {
    history.replace('/dashboard');
  }, [history]);

  const handleSaveClick = useCallback(async () => {
    try {
      if (Object.values(noteData).length) {
        delete noteData.id;
        delete noteData.createdAt;
        delete noteData.updatedAt;
        delete noteData.userId;

        if (!noteData.isLink) {
          const schema = yup.object().shape({
            title: yup.string().required('Título obrigatório'),
            content: yup.object().notRequired(),
            tags: yup.array(yup.string()).notRequired(),
          });

          await schema.validate(noteData, {
            abortEarly: false,
          });
        }

        const schema = yup.object().shape({
          title: yup.string().required('Título obrigatório'),
          content: yup
            .object()
            .shape({
              url: yup.string().url('Formato de URL inválido'),
            })
            .required('URL obrigatória em um link'),
          tags: yup.array(yup.string()).notRequired(),
        });

        await schema.validate(noteData, {
          abortEarly: false,
        });

        if (noteData.tags && noteData.tags.length === 0) {
          noteData.tags = [];
        }

        if (editor) {
          const editorContent = await editor.save();

          await api.put(`/notes/${noteId}`, {
            content: editorContent,
            ...noteData,
          });
        } else {
          await api.put(`/notes/${noteId}`, {
            ...noteData,
          });
        }
      } else {
        const editorContent = await editor.save();
        await api.put(`/notes/${noteId}`, {
          content: editorContent,
        });
      }

      toast.success('Nota salva com sucesso 😉');

      history.push(`/dashboard`);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach(yupErr => {
          toast.error(yupErr.message);
        });

        return;
      }

      toast.error('Erro interno do servidor. Tente novamente mais tarde');
    }
  }, [editor, noteId, history, noteData]);

  return (
    <Container>
      <LeftButtons>
        <CancelButton onClick={handleCancelClick}>Cancelar</CancelButton>

        <DeleteButton
          onClick={() => {
            setShowConfirmation(true);
          }}
        >
          Deletar
        </DeleteButton>
      </LeftButtons>
      <SaveButton onClick={handleSaveClick}>Salvar</SaveButton>
    </Container>
  );
};

EditPanel.propTypes = {
  editor: PropTypes.instanceOf(Editor),
  noteId: PropTypes.string.isRequired,
  setShowConfirmation: PropTypes.func.isRequired,
  noteData: PropTypes.shape({
    title: PropTypes.string,
    isLink: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

EditPanel.defaultProps = {
  noteData: {},
  editor: null,
};

export default EditPanel;
