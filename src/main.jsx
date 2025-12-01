import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ShopProvider } from "./Context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  </ShopProvider>
  
);
