import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalResetStyle } from "./styles/GlobalResetStyle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalResetStyle />
    <App />
  </StrictMode>,
);
