import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

const zoomIn = keyframes`

  0% {
    opacity:0;
    transform: scale(0);

  }

  100% {
    transform: scale(1);
    opacity:1;
  }

`;

const zoomOut = keyframes`

  0% {
    transform:scale(1);
  }

  80%{
    opacity:0;
  }

  100% {
    transform:scale(0);

  }
`;

const progressBar = keyframes`

  0% {
    width:100%;
  }

  100%{
    width:0px;
  }

`;

export const StyledToastContainer = styled.div`
  .Toastify__toast-container {
    position: fixed;
    width: 300px;

    z-index: 20000;
  }

  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
  }

  .Toastify__toast {
    display: flex;
    align-items: center;
    padding: 24px 16px;
    color: #fff;

    margin-top: 16px;

    width: 300px;

    z-index: 20000;

    position: relative;
  }

  .Toastify__toast-body {
    width: 100%;
    height: 100%;

    margin: 8px 4px;

    + svg {
      cursor: pointer;
      position: absolute;
      top: 0.5em;
      right: 1em;
    }
  }

  .Toastify__toast--success {
    background: #07bc0c;
  }

  .Toastify__toast--error {
    background: #e74c3c;
  }

  .Toastify__progress-bar {
    height: 10px;
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  .Toastify__progress-bar--error {
    background: ${lighten(0.2, "#e74c3c")};
  }

  .Toastify__progress-bar--success {
    background: ${lighten(0.2, "#07bc0c")};
  }

  .Toastify__progress-bar--animated {
    animation: ${progressBar} linear 4s forwards;
  }

  .zoomIn {
    animation: ${zoomIn} 0.5s forwards;
  }

  .zoomOut {
    animation: ${zoomOut} 0.5s forwards;
  }
`;
