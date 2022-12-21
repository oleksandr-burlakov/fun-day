import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { RecoilRoot } from 'recoil';
import axios from 'axios';
import {createTheme, ThemeProvider} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff743a',
    },
    secondary: {
      main: '#ba5428',
    },
  },
});

axios.defaults.baseURL = "https://localhost:7176/api/";
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit response config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);