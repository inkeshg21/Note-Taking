import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 45px;

  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 45px;

  background: #e36396;
  border: 3px solid transparent;
  box-shadow: 0 4px 3px #ccc;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: 0.6s;

  &:hover {
    border-color: #fff;
  }
`;

export const Caption = styled(animated.div)`
  z-index: -20;

  color: #fff;
  background: #557dac;

  display: flex;
  align-items: center;

  border-radius: 50px;

  margin-right: -25px;

  height: 40px;

  > span {
    margin: 20px 32px;
    font-weight: 700;
    font-size: 14px;

    text-transform: uppercase;
  }
`;
