import React, { useCallback, useRef, useState } from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { useSpring, useChain, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';

import { Container, ButtonContainer, Caption } from './styles';

const CreateNoteButton = () => {
  const textAnimationRef = useRef();
  const barAnimationRef = useRef();
  const [initAnimation, setInitAnimation] = useState(false);
  const history = useHistory();

  const [barProps, setBarProps] = useSpring(() => ({
    width: '0px',
    ref: barAnimationRef,
  }));

  const [textProps, setTextProps] = useSpring(() => ({
    opacity: 0,
    ref: textAnimationRef,
  }));

  useChain(
    initAnimation
      ? [barAnimationRef, textAnimationRef]
      : [textAnimationRef, barAnimationRef],
  );

  const handleButtonMouseEnter = useCallback(() => {
    setInitAnimation(true);

    setBarProps({
      width: '200px',
    });

    setTextProps({ opacity: 1 });
  }, [setTextProps, setBarProps]);

  const handleButtonMouseLeave = useCallback(() => {
    setInitAnimation(false);

    setTextProps({ opacity: 0 });

    setBarProps({ width: '0px' });
  }, [setTextProps, setBarProps]);

  const handleButtonClick = useCallback(() => {
    history.push('/note/create');
  }, [history]);

  return (
    <Container>
      <Caption style={barProps}>
        <animated.span style={textProps}>Criar anotação</animated.span>
      </Caption>

      <ButtonContainer
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleButtonClick}
      >
        <BiPlusMedical color="#fff" size={16} />
      </ButtonContainer>
    </Container>
  );
};

export default CreateNoteButton;
