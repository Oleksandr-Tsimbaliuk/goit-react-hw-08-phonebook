import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import Loader from './Loader/Loader';
import PrivatRoute from './UserMenu/PrivatRoute';
import PublicRoute from './UserMenu/PublicRoute';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Home = lazy(() => import('pages/Home/Home'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const IsLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (IsLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, IsLoggedIn]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/registration"
            element={
              <PublicRoute
                component={RegistrationPage}
                redirectTo="/Contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute component={LoginPage} redirectTo="/Contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivatRoute component={Contacts} redirectTo="/login" />}
          />

          {/* <Route
            path="/registration"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute>
                <Contacts />
              </PrivatRoute>
            }
          /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}
