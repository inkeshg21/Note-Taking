import styled from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.div`
  width: 100%;
  padding: 24px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;

  box-shadow: -5px 0 5px #ccc;
`;

export const CancelButton = styled.button`
  background: transparent;
  border: 2px solid #c4c4c4;
  border-radius: 4px;

  color: #c4c4c4;
  font-weight: 700;
  text-transform: uppercase;

  padding: 10px 32px;

  &:active {
    background: ${lighten(0.2, "#c4c4c4")};
  }
`;

export const SaveButton = styled.button`
  background: #e36396;
  border-radius: 4px;

  padding: 10px 32px;

  color: #fff;
  font-weight: 700;
  text-transform: uppercase;

  &:active {
    background: ${shade(0.12, "#e36396")};
  }
`;
