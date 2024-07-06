import React from 'react';

import { Container, LateralStripe, MiddleSkew, Caption } from './styles';

const HeaderMiddleSkew = ({ children }) => {
  return (
    <Container>
      <LateralStripe />
      <MiddleSkew>
        <Caption>{children}</Caption>
      </MiddleSkew>
      <LateralStripe />
    </Container>
  );
};

export default HeaderMiddleSkew;
