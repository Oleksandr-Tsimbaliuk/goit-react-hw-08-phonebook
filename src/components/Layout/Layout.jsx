import Navigation from 'components/Navigation/Navigation';
import React from 'react';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export default Layout;
