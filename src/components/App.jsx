import React from 'react';
// import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/Home';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import Contacts from 'pages/Contacts';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
}
