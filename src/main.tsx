import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import App from "./app";
import theme from "./theme";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <HashRouter basename="/portal-obras/">
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </>,
  document.getElementById("root"),
);
