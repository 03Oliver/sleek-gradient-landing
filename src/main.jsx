
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  darkGradient: "linear(to-r, black, gray.800)",
  lightGradient: "linear(to-r, gray.100, gray.300)",
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "black" : "gray.100",
      color: props.colorMode === "dark" ? "white" : "gray.800",
    },
  }),
};

const theme = extendTheme({ colors, config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
