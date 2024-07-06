import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';

import logoImg from '../../assets/avatar.jpg';
import UserEditPanel from '../HeaderUserEditPanel';
import {
  Container,
  UserAvatar,
  NameCaption,
  ShowOptionsButton,
} from './styles';

const HeaderUserInfo = ({ username }) => {
  const [showEditPanel, setShowEditPanel] = useState(false);

  return (
    <Container>
      <NameCaption>{username}</NameCaption>
      <UserAvatar>
        <img src={logoImg} alt="User's avatar" />
        <ShowOptionsButton
          onClick={() => {
            setShowEditPanel(prev => !prev);
          }}
        >
          <FiChevronDown color="#557dac" size={16} />
        </ShowOptionsButton>
        <UserEditPanel show={showEditPanel} />
      </UserAvatar>
    </Container>
  );
};

HeaderUserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};

export default HeaderUserInfo;
