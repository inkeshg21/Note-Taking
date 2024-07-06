import styled, { css } from "styled-components";

import { BlockPicker } from "react-color";
import Loading from "../Loading";

export const Container = styled.div`
  width: 100%;
  background: #fff;

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 16px;

  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const TagPreviewContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 70px;

  margin: 24px 0;

  ${(props) =>
    props.height > 70 &&
    css`
      overflow: scroll;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 50px;
      }

      &::-webkit-scrollbar-button {
        display: none;
      }
    `}
`;

export const TagPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #${(props) => props.color};
  border: 3px solid #${(props) => props.color};
  border-radius: 50px;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: #fff;

  padding: 4px 8px;

  > span {
    max-height: 80%;
    max-width: 100%;

    margin: 4px 8px;
  }
`;

export const TagChangeContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  margin: 24px 0;
`;

export const Input = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 4px;

  justify-content: space-between;
  > input {
    outline: 0;
    border: 0;
    border-radius: 50px;
    color: #777;
    font-weight: 500;
    font-size: 14px;

    padding: 8px 16px;
  }

  position: relative;

  @media (max-width: 900px) {
    > input {
      padding: 8px;
      font-size: 10px;
    }
  }
`;

export const ColorPickerButton = styled.button`
  width: 35px;
  height: 35px;

  border-radius: 50%;

  background: ${(props) => props.color};
  border: 3px solid ${(props) => props.color};
`;

export const SaveButton = styled.button`
  border-radius: 50%;
  width: 45px;
  height: 45px;

  margin: 0 8px 0 16px;

  background: #e36396;

  @media (max-width: 900px) {
    margin-left: 8px;
    margin-right: 0;
  }
`;

export const StyledBlockPicker = styled(BlockPicker)`
  position: absolute !important;
  top: 50px;
  left: 125px;

  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15) !important;

  user-select: contain !important;

  z-index: 18000;

  span {
    > div {
      width: 38px !important;
      height: 38px !important;
    }
  }

  div:nth-child(3) {
    div:nth-child(2) {
      width: 100%;

      > input {
        padding: 16px 8px;
      }
    }
  }

  @media (max-width: 900px) {
    left: 30px;
  }
`;

export const StyledLoading = styled(Loading)`
  margin: 8px 0;
`;
