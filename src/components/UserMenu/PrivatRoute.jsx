import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getisRefreshing } from 'redux/auth/authSelectors';

// export default function PrivatRoute({
//   component: Component,
//   redirectTo = '/',
// }) {
//   const IsLoggedIn = useSelector(getIsLoggedIn);
//   const isRefreshing = useSelector(getisRefreshing);
//   return !IsLoggedIn & !isRefreshing ? (
//     <Navigate to={redirectTo} />
//   ) : (
//     <Component />
//   );
// }

const PrivatRoute = children => {
  const IsLoggedIn = useSelector(getIsLoggedIn);

  return IsLoggedIn ? children : <Navigate to="login/" />;
};

export default PrivatRoute;
