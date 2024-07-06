import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${(props) =>
    !!props.styleHeight &&
    !props.hasContent &&
    css`
      height: ${props.styleHeight}px;
    `}
`;

export const ContentContainer = styled.div`
  max-width: 70%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  padding-top: 60px;

  ${(props) =>
    !props.hasContent &&
    css`
      min-height: ${(window.outerHeight * 77.5) / 100}px;
    `};

  ${(props) =>
    props.hasContent &&
    css`
      min-height: ${(window.outerHeight * 77.5) / 100}px;
    `};

  @media (max-width: 900px) {
    max-width: 90%;

    min-height: ${(window.outerHeight * 81) / 100}px;

    ${(props) =>
      !props.hasContent &&
      css`
        min-height: ${(window.outerHeight * 88) / 100}px;
      `};
  }
`;

export const SearchBar = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: #f4f5f7;

  font-weight: 500;

  padding: 8px 24px;
  height: 45px;
  border-radius: 60px;

  input {
    flex: 1;
    border: 0;
    background: transparent;

    font-size: 18px;
    color: #666;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: rgba(52, 63, 94, 0.3);
    }
  }

  svg {
    color: rgba(52, 63, 94, 0.3);
  }
`;

export const TagsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 32px auto 0 auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const NotesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isFullFilled &&
    !props.isLoading &&
    css`
      margin: 50px 0;
      display: grid;
      grid-template-columns: repeat(3, minmax(300px, 1fr));
      grid-gap: 10px;
      grid-auto-flow: row;
      justify-items: center;
    `}

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(300px, 1fr);
  }
`;

export const NullContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 30px 0;

  > h1 {
    color: #8d8e8e;
    font-size: 32px;

    margin: 24px 0;
  }

  > p {
    color: #8d8e8e;
    font-size: 20px;

    max-width: 70%;
  }

  @media (max-width: 900px) {
    text-align: center;

    > p {
      max-width: 100%;
      font-size: 16px;
    }

    > h1 {
      font-size: 24px;
    }
  }
`;
