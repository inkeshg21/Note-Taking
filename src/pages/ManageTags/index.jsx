import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import TagManipulationInterface from '../../components/TagManipulationInterface';
import {
  Container,
  ContentContainer,
  TagsContainer,
  TagsArea,
  StyledTag,
  NullContainer,
  Panel,
  ActionsPanel,
  CancelButton,
  DeleteButton,
  EditButton,
} from './styles';
import api from '../../services/api';

const ManageTags = () => {
  const history = useHistory();
  const [userTags, setUserTags] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTagsObjects, setSelectedTagsObjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/tags');

      setUserTags([...response.data.tags]);
    };

    getData();
  }, []);

  useEffect(() => {
    if (selectedTags.length && userTags.length) {
      setSelectedTagsObjects(() => {
        const newTags = userTags.filter(userTag =>
          selectedTags.includes(userTag.name),
        );

        return newTags;
      });
    }
  }, [selectedTags, userTags]);

  const handleDeleteClick = useCallback(async () => {
    if (selectedTags.length && selectedTagsObjects.length) {
      const deletePromises = selectedTags.map(tagName => {
        const tagIdFindIndex = selectedTagsObjects.findIndex(
          tag => tag.name === tagName,
        );
        if (tagIdFindIndex === -1) return;

        return new Promise(async (resolve, reject) => {
          try {
            await api.delete(`/tags/${selectedTagsObjects[tagIdFindIndex].id}`);

            setUserTags(prev => {
              const newArray = [...prev];

              const findIndex = newArray.findIndex(
                userTag =>
                  userTag.id === selectedTagsObjects[tagIdFindIndex].id,
              );

              if (findIndex !== -1) newArray.splice(findIndex, 1);

              return newArray;
            });

            resolve();
          } catch (e) {
            reject();
          }
        });
      });

      await Promise.all(deletePromises);

      setSelectedTags([]);
      setSelectedTagsObjects([]);
    }
  }, [selectedTags, selectedTagsObjects]);

  return (
    <Container>
      <Header title="Gerenciamento de Tags" />
      <ContentContainer>
        <TagsContainer>
          <h1>Tags</h1>

          <TagsArea>
            <TagManipulationInterface
              apiTags={userTags}
              selectedTags={selectedTags}
              setApiTags={setUserTags}
              setSelectedTags={setSelectedTags}
            />

            {userTags &&
              !!userTags.length &&
              userTags.map(userTag => (
                <StyledTag
                  key={userTag.id}
                  name={userTag.name}
                  color={userTag.color}
                  setTagsArray={setSelectedTags}
                  tagsArray={selectedTags}
                />
              ))}
          </TagsArea>

          {userTags && !userTags.length && (
            <NullContainer>
              <h3>Nenhuma tag para mostrar 😓</h3>
              <p>Crie novas tags para poder gerenciá-las.</p>
            </NullContainer>
          )}
        </TagsContainer>
        <Panel>
          <h1>Painel de Gerenciamento</h1>
          <ActionsPanel>
            <CancelButton
              onClick={() => {
                history.replace('/dashboard');
              }}
            >
              <span>Voltar</span>
            </CancelButton>
            <DeleteButton onClick={handleDeleteClick}>
              <span>Deletar ({selectedTags && selectedTags.length})</span>
            </DeleteButton>
            <EditButton
              to={
                (!!selectedTagsObjects.length && {
                  pathname: '/tags/edit',
                  state: { tags: [...selectedTagsObjects] },
                }) ||
                '/tags'
              }
            >
              <span>Editar ({selectedTags && selectedTags.length})</span>
            </EditButton>
          </ActionsPanel>
        </Panel>
      </ContentContainer>
    </Container>
  );
};

export default ManageTags;
