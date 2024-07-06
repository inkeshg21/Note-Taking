import styled, { keyframes } from "styled-components";

const spin = keyframes`

  0%{
    transform:rotate(0deg);
  }

  100%{
    transform:rotate(360deg);
  }


`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 60px 0;
`;

export const LoadingSpin = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  border: 6px solid #557dac;
  border-top-color: #e36396;

  animation: ${spin} 1s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
`;
