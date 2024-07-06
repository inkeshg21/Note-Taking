import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Container, SaveButton, CancelButton } from './styles';
import api from '../../services/api';

const SavePanel = ({ data }) => {
  const history = useHistory();

  const handleCancelClick = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  const handleSaveClick = useCallback(async () => {
    try {
      if (data.isLink) {
        const linkSchema = yup.object().shape({
          title: yup.string().required('Título obrigatório'),
          content: yup.object().shape({
            url: yup
              .string()
              .required('Um link deve possuir obrigatoriamente uma URL'),
          }),
        });

        await linkSchema.validate(data, {
          abortEarly: false,
        });
      } else {
        const noteSchema = yup.object().shape({
          title: yup.string().required('Título obrigatório'),
        });

        await noteSchema.validate(data, {
          abortEarly: false,
        });
      }

      await api.post('/notes', data);
      history.push('/dashboard');

      toast.success('Nova nota criada com sucesso!');
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.errors.forEach(yupErrMessage => {
          toast.error(yupErrMessage);
        });
      }

      console.error(err);
    }
  }, [data, history]);

  return (
    <>
      <Container>
        <CancelButton onClick={handleCancelClick}>Cancelar</CancelButton>
        <SaveButton onClick={handleSaveClick}>Salvar</SaveButton>
      </Container>
    </>
  );
};

SavePanel.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.object,
    isLink: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

SavePanel.defaultProps = {
  data: {},
};

export default SavePanel;
