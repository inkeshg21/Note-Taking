import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import PropTypes from 'prop-types';

import QuickEditList from '../QuickEditList';
import {
  Container,
  ContentContainer,
  TitleContainer,
  NoteTitle,
  QuickEditButton,
  TagsContainer,
  StyledTag,
} from './styles';

const decorationColors = [
  ['FF4AAC', 'CA6E02'],
  ['4AC9FF', '3BD29C'],
  ['2D66A9', 'E36396'],
  ['E36396', '99D23B'],
  ['2D66A9', 'CA6E02'],
  ['99D23B', '3BD29C'],
];

const NotePreview = ({ data, setGeneralData }) => {
  const [showEditList, setShowEditList] = useState(false);
  const [randomColor, setRandomColor] = useState(['ccc', 'b9b9b9']);
  const quickEditButtonRef = useRef(null);
  const tagsContainerRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (tagsContainerRef && tagsContainerRef.current) {
      if (tagsContainerRef.current.clientHeight > 70) {
        tagsContainerRef.current.style.maxHeight = '50px';
        tagsContainerRef.current.style.overflowY = 'scroll';
      }
    }
  }, [tagsContainerRef]);

  useEffect(() => {
    setRandomColor(
      decorationColors[Math.floor(Math.random() * decorationColors.length)],
    );
  }, []);

  const handleNoteClick = useCallback(
    e => {
      let isChild = false;
      let el = e.target;

      if (el === quickEditButtonRef.current) {
        isChild = true;
      }

      while ((el = el.parentNode)) {
        if (el === quickEditButtonRef.current) {
          isChild = true;
        }
      }

      if (isChild) return;

      if (data.isLink) {
        window.open(
          data.content.url.startsWith('http')
            ? data.content.url
            : `http://${data.content.url}`,
        );
        return;
      }

      history.push(`/note/view/${data.id}`);
    },
    [data, history, quickEditButtonRef],
  );

  const handleQuickEditClick = useCallback(() => {
    setShowEditList(prev => !prev);
  }, [setShowEditList]);

  return (
    <Container colors={randomColor} onClick={handleNoteClick}>
      <ContentContainer>
        <TitleContainer>
          <NoteTitle>{data.title}</NoteTitle>
          <QuickEditButton
            ref={quickEditButtonRef}
            onClick={handleQuickEditClick}
            type="button"
          >
            <FiMoreVertical color="#333" size={25} />
            <QuickEditList
              data={data}
              show={showEditList}
              setGeneralData={setGeneralData}
            />
          </QuickEditButton>
        </TitleContainer>
        <TagsContainer ref={tagsContainerRef}>
          {data.tags &&
            data.tags.map(tag => {
              return (
                <StyledTag key={tag.id} color={tag.color}>
                  <span>{tag.name}</span>
                </StyledTag>
              );
            })}
        </TagsContainer>
      </ContentContainer>
    </Container>
  );
};

NotePreview.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isLink: PropTypes.bool.isRequired,
    content: PropTypes.shape({
      url: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  setGeneralData: PropTypes.func.isRequired,
};

export default NotePreview;
