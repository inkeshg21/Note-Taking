import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  box-shadow: 2px 2px 3px #ccc;

  > a {
    display: flex;
    align-items: center;

    margin: 0 16px;

    @media (max-width: 900px) {
      margin: 0 32px 0 8px;
    }
  }
`;
