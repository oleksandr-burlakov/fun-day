import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { setAuthToken } from './helpers/setAuthToken';
import { useAuthentication } from './hooks/useAuth';
import { Login } from './pages/authentication/Login';
import { Registration } from './pages/authentication/Registration';
import { BaseLayout } from './pages/BaseLayout';
import { List } from './pages/events/List';
import { Home } from './pages/home/Home';
import { AuthLayout } from './routes/AuthLayout';
import { AddNewEvent } from './pages/events/AddNewEvent';

function App() {
  const { isAuthorized } = useAuthentication();
  
  if (isAuthorized) {
    const token = localStorage.getItem("token");
    setAuthToken(token);
  }
  return (
    <Routes>
      <Route path="/" element={<BaseLayout/>}>
        <Route path="" element={<Home/>} />
        <Route path="events" element={<AuthLayout/>}>
          <Route path="" element={<List/>}/>
          <Route path="new" element={<AddNewEvent/>} />
        </Route>
        <Route path="places" element={<AuthLayout/>}>
          
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
      </Route>
    </Routes>
  );
}

export default App;
