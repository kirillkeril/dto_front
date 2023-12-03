import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import '@mantine/notifications/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {ModalsProvider} from "@mantine/modals";

const theme = createTheme({
    fontFamily: "Open Sans, sans-serif"
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={theme}>
        <ModalsProvider>
            <Notifications limit={3}/>
            <App />
        </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
