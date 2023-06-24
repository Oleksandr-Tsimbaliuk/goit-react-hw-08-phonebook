import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Registeration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
