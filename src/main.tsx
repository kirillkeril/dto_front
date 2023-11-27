import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({
    fontFamily: "Open Sans, sans-serif"
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
