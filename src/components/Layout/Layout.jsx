import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
// import Contacts from 'pages/Contacts';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledLayout } from './Styled';

function Layout({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <StyledLayout>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledLayout>
      {children}
    </>
  );
}

export default Layout;
