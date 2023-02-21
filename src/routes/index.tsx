import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import { DashBoard } from '../pages/dashboard/DashBoard';

export const Rotas = () =>{ 
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/entrar" element={<Login/>} />
            <Route path="/dash" element={<DashBoard/>} />

            <Route path="*" element={<Navigate replace to="/entrar" />} />
        </Routes>
    </BrowserRouter>
  )
};

