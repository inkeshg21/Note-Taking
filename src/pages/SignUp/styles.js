import styled from "styled-components";
import { shade } from "polished";

import Input from "../../components/Input";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;

  h2 {
    margin: 40px 0 24px 0;

    color: #557dac;
    font-weight: 400;
    font-size: 35px;
  }

  p {
    font-weight: 300;
    color: #9a9393;
    font-size: 18px;

    text-align: center;
    max-width: 80%;

    margin-bottom: 16px;
  }

  form {
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      text-transform: uppercase;
      background: #e36396;
      color: #fff;
      font-weight: 700;
      height: 50px;
      text-align: center;
      width: 90%;
      border-radius: 32px;
      margin: 24px 0 24px 0;

      &:active {
        background: linear-gradient(
          ${shade(0.1, "#e36396")},
          ${shade(0.1, "#e36396")}
        );
      }

      @media (max-width: 1200px) {
        width: 80%;
      }

      @media (max-width: 900px) {
        width: 100%;
      }

      /* button */
    }

    @media (max-width: 900px) {
      form {
        width: 100%;
      }
    }
  }

  > span {
    color: #9a9393;
    font-weight: 300;
    font-size: 18px;
    > a {
      color: #e36396;
      font-weight: 400;
    }
  }
`;

export const BackgroundContainer = styled.div`
  flex: 1.5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f2f2f2;

  h2 {
    color: #557dac;
    font-size: 32px;

    margin-top: 60px;
  }
  p {
    color: #a19b9b;
    font-weight: 300;
    font-size: 24px;
    text-align: center;

    max-width: 70%;

    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 1500px) {
    flex: 1;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledInput = styled(Input)`
  width: 90%;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
