import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    display:block;
    max-width:100%;
  }

  ul, ol {
    list-style:none;
  }

  button {
    outline: none;
    border: 0;

    cursor: pointer;
    font-family: "Roboto","Arial", sans-serif !important;
  }

  input {
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
      box-shadow: 0 0 0px 10000px white inset;
    }
  }

  body {
    font-family: "Roboto","Arial", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
