import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  box-shadow: -3px 0 4px #c4c4c4;

  display: flex;
  justify-content: space-between;

  padding: 24px;
`;

export const LeftButtons = styled.div`
  display: flex;

  /* @media (max-width: 900px) {
    flex-direction: column;
  } */
`;

export const CancelButton = styled.button`
  border: 2px solid #c4c4c4;
  color: #c4c4c4;
  font-weight: 700;
  padding: 10px 24px;

  border-radius: 5px;
  background: transparent;

  text-transform: uppercase;

  &:active {
    background: ${shade(0.05, "#fff")};
  }

  @media (max-width: 900px) {
    padding: 10px 16px;
    font-size: 10px;
  }
`;

export const DeleteButton = styled.button`
  border: 2px solid #f65757;
  color: #f65757;
  font-weight: 700;

  padding: 10px 24px;
  margin-left: 16px;

  border-radius: 5px;

  background: transparent;

  text-transform: uppercase;

  &:active {
    background: ${shade(0.03, "#fff")};
  }

  @media (max-width: 900px) {
    padding: 10px 16px;
    font-size: 10px;

    margin-left: 8px;
  }
`;

export const SaveButton = styled.button`
  background: #e36396;

  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;

  padding: 10px 24px;

  border-radius: 5px;

  &:active {
    background: ${shade(0.1, "#e36396")};
  }

  @media (max-width: 900px) {
    padding: 10px 16px;
    font-size: 10px;
  }
`;
