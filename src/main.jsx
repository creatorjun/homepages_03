import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 이 부분의 확장자가 .js 입니다.
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);