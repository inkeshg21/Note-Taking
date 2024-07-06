import styled, { css } from "styled-components";
import { lighten } from "polished";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: ${`${document.documentElement.scrollHeight}px`};
`;

export const ContentContainer = styled.div`
  width: 50%;
  margin: 80px auto;

  > h1 {
    color: #8d8e8e;
    text-transform: uppercase;
    font-size: 28px;
  }

  @media (max-width: 900px) {
    width: 90%;

    > h1 {
      font-size: 20px;
    }
  }
`;

export const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-auto-flow: row;
  grid-gap: 30px;

  margin: 60px 0;

  ${(props) =>
    !props.hasContent &&
    css`
      display: flex;
      justify-content: center;
    `}

  @media(max-width:1200px) {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    justify-items: center;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(280px, 1fr);
    justify-items: center;
  }
`;

export const NullContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  > h3 {
    color: #aeafaf;
    font-size: 32px;

    margin: 24px 0;
  }

  > p {
    color: #aeafaf;
    font-size: 20px;

    max-width: 100%;
  }
`;

export const GoBackButton = styled(Link)`
  max-width: 120px;
  background: #b9b9b9;
  border-radius: 50px;

  padding: 8px 24px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
  }

  &:active {
    background: ${lighten(0.05, "#b9b9b9")};
  }
`;
