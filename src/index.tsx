import React from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./router/routes.tsx";
import "./global.css";
import { NavBar } from "./components/navbar/navBar.tsx";

const container = document.querySelector("#root") ?? document.body;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>
    <Routes />
  </React.StrictMode>
);
