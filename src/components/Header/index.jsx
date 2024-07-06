import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Logo from '../Logo';
import HeaderMiddleSkew from '../HeaderMiddleSkew';
import HeaderUserInfo from '../HeaderUserInfo';

import { useAuth } from '../../hooks/auth';

const Header = ({ title }) => {
  const { data } = useAuth();

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderMiddleSkew>{title}</HeaderMiddleSkew>
      <HeaderUserInfo username={data.user.username} />
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
