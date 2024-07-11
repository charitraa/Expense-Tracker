import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../module/Login';
import Header from '../module/Header';
import Register from '../module/Register';
import PrivateRoute from './Privateroute'; // Ensure the path is correct

export default function RoutesNav() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<PrivateRoute />}>
        <Route path="/app" element={<Header />} />
      </Route>
    </Routes>
  );
}
