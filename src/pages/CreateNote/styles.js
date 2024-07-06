import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: start;
`;

export const ContentContainer = styled.div`
  width: 50%;
  min-height: ${(window.outerHeight * 62) / 100}px;

  margin: 80px auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;

  align-items: center;
`;

export const SwitchLabel = styled.span`
  color: #8d8e8e;
  text-transform: uppercase;
  font-weight: 700;

  margin-right: 8px;

  min-width: 90px;
`;

export const TitleInput = styled.input`
  font-size: 42px;
  color: #333;

  margin: 16px 0;

  border: 0;
  outline: 0;

  &::placeholder {
    color: rgba(51, 51, 51, 0.3);
  }

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const TagsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-bottom: 30px;
`;

export const StyledTag = styled.div`
  background: #${props => props.color};

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
`;

export const LinkURL = styled.input`
  padding: 14px 12px;
  margin-top: 24px;

  border-radius: 50px;

  width: 40%;

  border: 0;
  outline: 0;
  background: #f4f4f4;

  font-size: 16px;
  font-weight: 500;
  color: #667078;

  &::placeholder {
    color: #99a0ac;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    width: 80%;

    font-size: 12px;
  }
`;

export const EditorContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 30px;

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
    width: 100%;
    padding-bottom: 100px !important;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
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
    width: 100%;
    padding-bottom: 100px !important;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
