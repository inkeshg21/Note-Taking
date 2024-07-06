import React from "react";
import { BrowserRouter } from "react-router-dom";
import { cssTransition, ToastContainer } from "react-toastify";
import { FiX } from "react-icons/fi";

import GlobalStyle from "./styles/global";
import { StyledToastContainer } from "./styles/app";
import Routes from "./routes";
import ContextProvider from "./hooks";

const App = () => {
  const Zoom = cssTransition({
    enter: "zoomIn",
    exit: "zoomOut",
    duration: 700,
    appendPosition: false,
    collapse: true,
    collapseDuration: 500,
  });

  return (
    <ContextProvider>
      <GlobalStyle />
      <StyledToastContainer>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnHover
          transition={Zoom}
          closeButton={FiX({ color: "#fff", size: 20 })}
          limit={5}
        />
      </StyledToastContainer>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
