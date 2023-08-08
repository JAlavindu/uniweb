import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeFeed } from "./screens/HomeFeed";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeFeed />);
