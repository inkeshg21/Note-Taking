import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTrail, useSpring, useChain } from 'react-spring';
import { useHistory } from 'react-router-dom';

import { Container, Option } from './styles';
import { useAuth } from '../../hooks/auth';

const HeaderUserEditPanel = ({ show }) => {
  const { signOut } = useAuth();
  const containerAnimationRef = useRef();
  const optionsTrailAnimationRef = useRef();
  const [props, setContainerAppear] = useSpring(() => ({
    height: '0px',
    opacity: 0,
    ref: containerAnimationRef,
  }));

  const [trailProps, setTrailAppear] = useTrail(2, () => ({
    transform: 'scale(0.5)',
    opacity: 0,
    pointerEvents: 'none',
    ref: optionsTrailAnimationRef,
  }));

  const history = useHistory();

  useChain(
    show
      ? [containerAnimationRef, optionsTrailAnimationRef]
      : [optionsTrailAnimationRef, containerAnimationRef],
  );

  useEffect(() => {
    if (show) {
      setContainerAppear({
        height: '150px',
        opacity: 1,
      });

      /*


        Trail



      */
      setTrailAppear({
        transform: 'scale(1)',
        opacity: 1,
        pointerEvents: 'auto',
      });
      return;
    }

    setTrailAppear({
      transform: 'scale(0.5)',
      opacity: 0,
      pointerEvents: 'none',
    });

    setContainerAppear({
      height: '0px',
      opacity: 0,
    });
  }, [show, setContainerAppear, setTrailAppear]);

  return (
    <Container style={props}>
      {trailProps.map((trailElementProps, index) =>
        !index ? (
          <Option
            key="tags"
            onClick={() => {
              history.push('/tags');
            }}
            style={trailElementProps}
          >
            <span>Gerenciar Tags</span>
          </Option>
        ) : (
          <Option
            key="logout"
            onClick={() => {
              signOut();
              history.push('/');
            }}
            style={trailElementProps}
          >
            <span>Fazer logout</span>
          </Option>
        ),
      )}
    </Container>
  );
};

HeaderUserEditPanel.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default HeaderUserEditPanel;
