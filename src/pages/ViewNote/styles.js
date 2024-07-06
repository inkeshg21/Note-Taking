import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-items: stretch;

  ${props =>
    props.showConfirmation &&
    css`
      &::before {
        content: '';
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
  width: 60%;
  min-height: ${(window.outerHeight * 65.75) / 100}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px auto;
  padding-top: 30px;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const EditorContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > h1 {
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

    > h1 {
      font-size: 32px;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  margin: 0 auto 60px auto;
`;

export const StyledTag = styled.div`
  display: flex;
  align-items: center;

  background: #${props => props.color};
  border: 3px solid #${props => props.color};
  border-radius: 50px;

  padding: 8px 16px;
  margin: 8px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: #fff;

  margin-left: 8px;
`;
