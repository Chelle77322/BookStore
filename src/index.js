import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
 

import App from "./App.jsx";

const appElement = document.getElementById("root");

if(appElement){
    const app = createRoot(appElement);

app.render(
 <Router>
    <App />

    </Router>
)
}