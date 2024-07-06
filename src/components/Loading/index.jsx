import React from 'react';
import PropTypes from 'prop-types';

import { Container, LoadingSpin } from './styles';

const Loading = ({ className }) => {
  return (
    <Container className={className}>
      <LoadingSpin />
    </Container>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
