import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid #dfdfdf;
  color: #dfdfdf;
  border-radius: 32px;

  margin-top: 16px;

  display: flex;
  align-items: center;

  overflow: hidden;

  svg {
    margin-left: 8px;
  }

  ${(props) =>
    props.hasError &&
    css`
      color: ${shade(0.1, "#c53030")} !important;
      border-color: ${shade(0.1, "#c53030")} !important;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #e36396 !important;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #e36396 !important;
      border-color: #e36396 !important;
    `}

  input {
    width: 100%;
    height: 100%;
    border: transparent;
    flex: 1;

    padding: 8px;

    color: #909090 !important;

    &::placeholder {
      color: #d0d0d0;
      font-size: 14px;
    }

    &:focus {
      outline: 0;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
      box-shadow: 0 0 0px 10000px white inset;

      -webkit-text-fill-color: #909090 !important;
    }

    ${(props) =>
      props.hasError &&
      css`
        &::placeholder {
          color: ${shade(0.1, "#c53030")} !important;
        }
      `}

    ${(props) =>
      props.isFocused &&
      css`
        &::placeholder {
          color: #d0d0d0 !important;
        }
      `}
  }
`;
