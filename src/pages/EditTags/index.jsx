import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import TagEditor from '../../components/TagEditor';
import {
  Container,
  ContentContainer,
  TagsContainer,
  NullContainer,
  GoBackButton,
} from './styles';

const EditTag = () => {
  const location = useLocation();
  const [tagsInfos, setTagsInfos] = useState(() => {
    if (location && location.state && location.state.tags.length) {
      const newTagsObject = {};

      location.state.tags.forEach(tagInArray => {
        newTagsObject[tagInArray.id] = {
          id: tagInArray.id,
          name: tagInArray.name,
          color: tagInArray.color,
        };
      });

      return newTagsObject;
    }

    return {};
  });

  return (
    <Container>
      <Header title="Editar Tags" />
      <ContentContainer>
        <h1>Painel de edição de Tags</h1>
        <TagsContainer hasContent={!!Object.keys(tagsInfos).length}>
          {tagsInfos &&
            Object.entries(tagsInfos).map(tagInfo => (
              <TagEditor
                key={tagInfo[1].id}
                tagInfo={tagInfo[1]}
                setTagsInfos={setTagsInfos}
                pathname={tagInfo[0]}
              />
            ))}
          {!Object.keys(tagsInfos).length && (
            <NullContainer>
              <h3>Nenhuma Tag para editar</h3>
              <p>Volte ao gerenciador para editar novas tags.</p>
              <GoBackButton to="/tags">
                <span>Voltar</span>
              </GoBackButton>
            </NullContainer>
          )}
        </TagsContainer>
      </ContentContainer>
    </Container>
  );
};

export default EditTag;
