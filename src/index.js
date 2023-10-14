import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PhotosContext from "../src/Context/PhotosContext"
import ThemesContext from "../src/Context/ThemeContext"
import ModalContext from './Context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemesContext>
      <ModalContext>
        <PhotosContext>
          <App />
        </PhotosContext>
      </ModalContext>
    </ThemesContext>
  </React.StrictMode>
);

