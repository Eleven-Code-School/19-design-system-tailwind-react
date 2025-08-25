import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { TextsProvider } from "./context/TextContexts.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <TextsProvider>
            <App />
        </TextsProvider>
    </BrowserRouter>
);
