import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

import {
  Container,
  ContentContainer,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styles';
import api from '../../services/api';

const DeleteNoteConfirmation = ({ setShowConfirmation, noteId }) => {
  const history = useHistory();

  const handleCancelClick = useCallback(() => {
    setShowConfirmation(false);
  }, [setShowConfirmation]);

  const handleConfirmClick = useCallback(async () => {
    try {
      await api.delete(`/notes/${noteId}`);

      history.replace('/dashboard');
    } catch (err) {
      toast.error(err.message);
    }
  }, [history, noteId]);

  return (
    <Container>
      <ContentContainer>
        <FiTrash color="#E36396" size={50} />
        <h3>Tem certeza?</h3>
        <p>
          Essa é uma ação irreversível, você tem certeza que quer deletar a
          anotação?
        </p>
      </ContentContainer>
      <ButtonsContainer>
        <CancelButton onClick={handleCancelClick}>Cancelar</CancelButton>
        <ConfirmButton onClick={handleConfirmClick}>Deletar</ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

DeleteNoteConfirmation.propTypes = {
  setShowConfirmation: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
};

export default DeleteNoteConfirmation;
