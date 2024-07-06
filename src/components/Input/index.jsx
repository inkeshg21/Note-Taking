import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as FeatherIcons from 'react-icons/fi';

import { Container } from './styles';

const Input = ({
  size,
  type,
  color,
  name,
  placeholder,
  icon,
  hasError,
  className,
  ...rest
}) => {
  const Icon = FeatherIcons[icon];
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Container
        className={className}
        hasError={hasError}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <Icon size={size} />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          {...rest} //eslint-disable-line
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={e => {
            setIsFocused(false);

            setIsFilled(!!e.target.value);
          }}
        />
      </Container>
    </>
  );
};

Input.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  hasError: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  size: 18,
  type: 'text',
  color: '#D0D0D0',
  icon: 'FiUser',
  placeholder: 'Digite aqui',
  hasError: false,
  className: '',
};

export default Input;
