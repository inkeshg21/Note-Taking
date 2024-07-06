import styled from "styled-components";

import { BlockPicker } from "react-color";
import Tag from "../Tag";

export const Container = styled.div`
  position: relative;

  margin-right: 8px;
`;

export const InterfaceButton = styled.div`
  padding: 4px 16px;
  margin: 8px 8px 8px 0;

  border: 1px solid #c4c4c4;
  border-radius: 50px;
  background: #fff;

  display: flex;
  align-items: center;

  cursor: pointer;

  user-select: none;

  > span {
    flex: 1;
    color: #ccc;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
  }

  > svg {
    margin-left: 16px;
  }

  @media (max-width: 900px) {
    padding: 2px 12px;

    > span {
      font-size: 10px;
    }
  }
`;

export const InterfaceContainer = styled.div`
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);

  background: #fff;

  padding: 24px 30px;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 120%;
  z-index: 150000;

  @media (max-width: 900px) {
    padding: 8px 16px;
    top: 100%;
  }
`;

export const TagCreationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TagCreationInput = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 50px;

  padding-right: 8px;

  > input {
    flex: 1;
    outline: 0;
    border: 0;

    height: 100%;
    padding: 16px 20px;

    border-radius: 50px;

    font-size: 16px;

    &::placeholder {
      color: #ccc;
    }

    @media (max-width: 900px) {
      padding: 14px 8px;
      font-size: 12px;
    }
  }
`;

export const ColorSelectorContainer = styled.div`
  position: relative;

  max-height: 35px;
  max-width: 35px;
`;

export const ColorButton = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;

  background: #${(props) => props.color};
  cursor: pointer;
`;

export const StyledBlockPicker = styled(BlockPicker)`
  position: absolute !important;
  top: 150%;
  left: -300%;

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
        padding: 16px 20px;
      }
    }
  }

  @media (max-width: 900px) {
    left: -340%;
  }
`;

export const TagSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 8px;
`;

export const StyledTag = styled(Tag)`
  border-width: 2px;

  padding: 8px 16px;

  > span {
    font-size: 14px;

    @media (max-width: 900px) {
      font-size: 10px;
    }
  }
`;

export const CreateTagButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #e36396;

  width: 45px;
  height: 45px;

  margin-left: 12px;

  cursor: pointer;
`;
