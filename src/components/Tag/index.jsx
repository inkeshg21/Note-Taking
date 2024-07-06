import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Tag = ({ name, color, setTagsArray, tagsArray, className }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleTagClick = useCallback(() => {
    setIsSelected(prev => !prev);
  }, []);

  useEffect(() => {
    if (setTagsArray) {
      setTagsArray(prev => {
        if (isSelected) {
          if (prev && !prev.includes(name)) {
            const newArray = [...prev];
            newArray.push(name);
            return newArray;
          }

          return prev;
        }

        /*

        */

        if (prev && prev.length) {
          const newArray = [...prev];

          const filteredSearch = newArray.filter(
            (searchTag, index, searchTagsArray) => {
              if (searchTag === name && searchTagsArray.includes(name)) {
                return false;
              }
              return true;
            },
          );
          return filteredSearch;
        }

        return prev;
      });
    }
  }, [isSelected, name, setTagsArray]);

  useEffect(() => {
    if (tagsArray) {
      setIsSelected(tagsArray.includes(name));
    }
  }, [name]);

  return (
    <Container
      className={className}
      color={color}
      onClick={handleTagClick}
      isSelected={isSelected}
    >
      <span>{name}</span>
    </Container>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  setTagsArray: PropTypes.func.isRequired,
  tagsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Tag.defaultProps = {
  className: '',
};

export default Tag;
