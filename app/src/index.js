import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import config from "./aws-exports";
import { Amplify, Storage } from "aws-amplify";

import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={studioTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
