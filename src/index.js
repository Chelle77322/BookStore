import React from "react";
import { createRoot } from 'react-dom/client';

 

import App from "./App.jsx";

const appElement =  createRoot (document.getElementById("root"));


appElement.render(
  
    <App />

 
);