import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* // <React.StrictMode> */}
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
    {/* // </React.StrictMode> */}
  </BrowserRouter>
);

reportWebVitals();
