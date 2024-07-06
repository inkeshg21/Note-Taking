import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LateralStripe = styled.div`
  width: 20px;
  transform: skewX(-10deg);
  background: #e36396;

  margin: 0 8px;
`;

export const MiddleSkew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px 15vw;
  background: #557dac;
  transform: skewX(-10deg);
`;

export const Caption = styled.span`
  color: white;
  min-width: 150%;
  font-weight: bold;
  font-size: 16px;

  transform: skewX(10deg);

  text-align: center;
`;
