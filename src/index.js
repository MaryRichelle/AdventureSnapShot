import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PhotosContext from "../src/Context/PhotosContext"
import ThemesContext from "../src/Context/ThemeContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemesContext>
      <PhotosContext>
        <App />
      </PhotosContext>
    </ThemesContext>
  </React.StrictMode>
);

