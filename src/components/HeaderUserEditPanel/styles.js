import styled from "styled-components";
import { animated } from "react-spring";
import { shade, lighten } from "polished";

export const Container = styled(animated.div)`
  background: #fff;

  box-shadow: 0 0 30px ${shade(0.1, "#ccc")};
  border-radius: 10px;

  position: absolute;
  left: -140px;
  top: 130%;

  width: 200px;
  opacity: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 2000000;
`;

export const Option = styled(animated.button)`
  pointer-events: none;

  position: relative;

  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;

  padding: 8px 16px;
  max-width: 80%;
  background: #bbb;
  margin: 8px 0;

  border-radius: 30px;

  &:hover {
    background: ${lighten(0.1, "#bbb")};
    border-color: ${lighten(0.1, "#bbb")};
  }

  span {
    display: block;
    color: #fff;

    font-size: 16px;
    text-align: center;
  }
`;
