import styled from "styled-components";
import { lighten } from "polished";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  width: 180px;
  display: none;
  flex-direction: column;

  padding: 16px 24px;

  opacity: 0;

  border-radius: 10px;
  border: 2px solid #ccc;
  background: #fff;

  position: absolute;

  top: 130%;
  left: -300%;

  z-index: 15000;

  @media (max-width: 900px) {
    left: -150px;
  }
`;

export const EditOption = styled(animated.button)`
  padding: 8px;

  z-index: 15000;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  span {
    color: #fff;
    font-size: 18px;
    text-align: center;
  }

  background: #bbb;

  border-radius: 50px;

  &:hover {
    background: ${lighten(0.1, "#bbb")};
  }

  @media (max-width: 900px) {
    span {
      font-size: 14px;
    }
  }
`;

export const DeleteOption = styled(animated.button)`
  padding: 8px;

  z-index: 15000;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }

  background: #f65757;

  border-radius: 50px;

  &:hover {
    background: ${lighten(0.1, "#f65757")};
  }

  @media (max-width: 900px) {
    span {
      font-size: 14px;
    }
  }
`;
