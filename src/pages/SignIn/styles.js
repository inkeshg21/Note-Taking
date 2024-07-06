import styled from "styled-components";
import { shade, lighten } from "polished";

import Input from "../../components/Input";

export const Container = styled.div`
  display: flex;

  height: 100vh;
`;

export const ContentContainer = styled.div`
  /* ContentContainer */

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;

  h2 {
    color: #557dac;
    font-weight: 400;
    font-size: 35px;

    margin: 60px 0 18px 0;
  }

  p {
    color: #9a9393;
    font-weight: 300;
    width: 80%;
    text-align: center;
    font-size: 18px;

    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;

    button {
      /* Button */

      margin-top: 20px;

      border-radius: 32px;
      width: 90%;
      height: 50px;
      background: linear-gradient(#e36396, #e36396);

      color: #fff;
      font-weight: 700;

      animation: 0.6s ease-out;

      &:active {
        background: linear-gradient(
          ${shade(0.1, "#e36396")},
          ${shade(0.1, "#e36396")}
        );
      }

      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        flex: 1;

        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        font-size: 12px;

        margin-left: 20px;
      }

      > svg {
        margin-right: 20px;
      }

      margin-bottom: 28px;

      @media (max-width: 1200px) {
        width: 80%;
      }

      @media (max-width: 900px) {
        width: 100%;
      }
      /* Button */
    }

    > span {
      width: 90%;

      font-weight: 300;
      font-size: 18px;
      color: #9a9393;
      text-align: center;

      a {
        color: #e36396;
        font-weight: 500;

        transition: 0.3s ease-out;

        &:hover {
          color: ${lighten(0.15, "#e36396")};
        }
      }
    }

    @media (max-width: 900px) {
      form {
        width: 100%;
      }
    }

    /* ContentContainer */
  }
`;

export const BackgroundContainer = styled.div`
  flex: 1.5;

  background: #f2f2f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 24px;
  }

  h2 {
    margin: 16px 0;
    color: #557dac;
    font-size: 32px;
  }

  p {
    font-weight: 300;
    color: #a19b9b;
    font-size: 20px;

    max-width: 70%;
    text-align: center;

    margin-bottom: 60px;
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
