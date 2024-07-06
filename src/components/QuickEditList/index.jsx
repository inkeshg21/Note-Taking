import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSpring, useTrail } from 'react-spring';
import { toast } from 'react-toastify';

import { Container, EditOption, DeleteOption } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const QuickEditList = ({ data, show, setGeneralData }) => {
  const userData = useAuth().data;
  const history = useHistory();

  const [
    props,
    setContainerAppear,
    stopContainerAppearAnimation,
  ] = useSpring(() => ({ height: '0px', opacity: 0, display: 'none' }));

  const [trailProps, setTrailAppear, stopTrailAppearAnimation] = useTrail(
    2,
    () => ({ transform: 'scale(0.5)', opacity: 0 }),
  );

  useEffect(() => {
    stopTrailAppearAnimation();
    stopContainerAppearAnimation();
    if (show) {
      setTimeout(() => {
        setContainerAppear({
          opacity: 1,
          display: 'flex',
        });
      }, 50);

      setTimeout(() => {
        setContainerAppear({
          height: '124px',
        });
      }, 60);

      /*

        Trail

      */

      setTimeout(() => {
        setTrailAppear({
          transform: 'scale(1)',
          opacity: 1,
        });
      }, 600);
      return;
    }

    setTrailAppear({
      transform: 'scale(0.5)',
      opacity: 0,
    });

    setTimeout(() => {
      setContainerAppear({
        height: '0px',
      });
    }, 600);

    setTimeout(() => {
      setContainerAppear({ opacity: 0 });
    }, 750);

    setTimeout(() => {
      setContainerAppear({ display: 'none' });
    }, 850);
  }, [show, setContainerAppear, stopContainerAppearAnimation]);

  const handleDeleteOptionClick = useCallback(async () => {
    try {
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };

      await api.delete(`/notes/${data.id}`, requestConfig);

      setGeneralData(prevState => {
        const newNoteList = [...prevState];
        const findIndex = newNoteList.findIndex(note => note.id === data.id);
        if (findIndex !== -1) newNoteList.splice(findIndex, 1);

        return newNoteList;
      });

      toast.success('Nota excluída com sucesso!');
    } catch (err) {
      toast.error('Erro interno do servidor. Tenta novamente mais tarde.');
    }
  }, [data]);

  return (
    <Container style={props}>
      {trailProps.map((trailElementProps, index) =>
        index ? (
          <DeleteOption
            onClick={handleDeleteOptionClick}
            key="delete"
            style={trailElementProps}
          >
            <span>Deletar</span>
          </DeleteOption>
        ) : (
          <EditOption
            key="edit"
            onClick={() => {
              history.push(`/note/edit/${data.id}`);
            }}
            style={trailElementProps}
          >
            <span>Editar</span>
          </EditOption>
        ),
      )}
    </Container>
  );
};

QuickEditList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool,
  setGeneralData: PropTypes.func.isRequired,
};

QuickEditList.defaultProps = {
  show: false,
};

export default QuickEditList;
