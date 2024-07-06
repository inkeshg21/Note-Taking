import React from 'react';

import logoSymbol from '../../assets/logo-symbol.svg';
import { Brand, Container } from './styles';

const Logo = () => {
  return (
    <Container>
      <img src={logoSymbol} alt="DevPad symbol" />
      <Brand>DevPad</Brand>
    </Container>
  );
};

export default Logo;
