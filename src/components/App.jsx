import React, { Suspense, lazy, useEffect } from 'react';
// import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
// import Home from 'pages/Home';
// import RegistrationPage from 'pages/RegistrationPage';
// import LoginPage from 'pages/LoginPage';
// import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/Contacts'));


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
