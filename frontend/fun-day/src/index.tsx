import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { funDayRouter } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={funDayRouter}/>
  </React.StrictMode>
);