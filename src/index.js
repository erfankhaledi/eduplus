import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App"; // Import the main App component

// Get a reference to the DOM element with id 'root'
const container = document.getElementById("root");

// Create a root to manage the application
const root = createRoot(container); 

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);