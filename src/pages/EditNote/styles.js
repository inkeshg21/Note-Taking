import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: start;

  ${(props) =>
    props.showConfirmation &&
    css`
      &::before {
        content: "";
        width: 100%;
        height: ${`${props.height}px`};

        background: #a8a8a8;

        position: absolute;
        top: 0;
        left: 0;

        z-index: 14000;
        opacity: 0.7;
      }
      overflow: hidden;
    `}
`;

export const ContentContainer = styled.div`
  width: 50%;
  min-height: ${(window.outerHeight * 62) / 100}px;

  margin: 80px auto;

  display: flex;
  flex-direction: column;

  > span {
    color: #8d8e8e;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }

  @media (max-width: 900px) {
    width: 90%;

    > span {
      font-size: 16px;
    }
  }
`;

export const NoteTitle = styled.input`
  outline: 0;
  border: 0;

  margin: 16px 0;

  font-size: 42px;
  color: #2b2929;

  &::placeholder {
    color: rgba(51, 51, 51, 0.3);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 10000px white inset;
  }

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const EditorContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    margin-left: 8px;
    margin-bottom: 32px;

    font-weight: 400;
    font-size: 42px;
  }

  .ce-block__content {
    max-width: 100% !important;
    margin-left: 8px;
  }

  .ce-header {
    font-weight: 400;
    font-size: 32px;
  }

  .ce-paragraph {
    color: #8d929a;
    font-size: 18px;

    > a {
      color: #e36396;
      text-decoration: none;
      font-weight: 700;
    }
  }

  .cdx-checklist__item--checked {
    div.cdx-checklist__item-text {
      color: #999 !important;
      position: relative;
      font-style: italic;
      text-decoration: line-through;
    }
  }

  .codex-editor__redactor {
    padding-bottom: 100px !important;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const LinkURLInput = styled.input`
  width: 40%;

  background: #f4f4f4;
  color: #555;
  font-size: 16px;

  outline: 0;
  border: 0;

  padding: 12px 20px;
  margin-top: 32px;

  border-radius: 50px;

  &::placeholder {
    color: #99a0ac;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  margin-bottom: 60px;
`;

export const StyledTag = styled.div`
  background: #${(props) => props.color};

  border-radius: 50px;

  margin: 8px 8px 8px 0;

  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    > span {
      font-size: 10px;
    }
  }
`;
