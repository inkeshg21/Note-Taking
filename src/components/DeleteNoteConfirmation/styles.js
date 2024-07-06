import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;

  border-radius: 10px;

  background: #f2f2f2;

  position: absolute;
  top: 35%;
  left: 40%;

  z-index: 15000;

  @media (max-width: 900px) {
    top: 50%;
    left: 16px;
    right: 16px;
    margin: 0 auto;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;

  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    margin: 16px 0;
    padding: 8px;

    border-radius: 50%;
    border: 2px solid #e36396;
  }

  > h3 {
    font-size: 20px;
    color: #707070;

    margin: 8px;
  }

  > p {
    color: #8c8c8c;
    font-weight: 400;

    max-width: 60%;

    text-align: center;

    margin: 8px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  background: #e9e9e9;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CancelButton = styled.button`
  flex: 1;
  margin: 1px 1px;
  padding: 16px 20px;

  background: #fff;

  border-bottom-left-radius: 10px;

  color: #9c9898;

  &:active {
    background: #eee;
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  padding: 16px 20px;

  margin: 1px 1px;

  background: #fff;

  font-weight: 700;

  border-bottom-right-radius: 10px;

  color: #707070;

  &:active {
    background: #eee;
  }
`;
