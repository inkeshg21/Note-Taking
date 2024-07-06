import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;

  padding: 30px 0;
`;

export const Copy = styled.p`
  color: #b9b9b9;
  font-size: 20px;
  max-width: 60%;

  @media (max-width: 900px) {
    max-width: 80%;
    font-size: 14px;
  }
`;
