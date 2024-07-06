import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 60px;
`;

export const Brand = styled.span`
  color: #e36396;
  font-family: "Poller One";
  font-size: 20px;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
