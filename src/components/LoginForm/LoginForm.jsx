import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperations';
import { StyledLoginForm } from './Styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSumbit = event => {
    event.preventDefault();
    const formInput = event.currentTarget;

    dispatch(
      logIn({
        email: formInput.elements.email.value,
        password: formInput.elements.password.value,
      })
    );
    resetState();
  };

  return (
    <StyledLoginForm onSubmit={handleSumbit}>
      <h2>Login</h2>

      <label className="form-label">
        <span>Email:</span>
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>

      <label className="form-label">
        <span>Password:</span>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button className="form-btn" type="submit">
        Log in
      </button>
      <NavLink to="/registration">Sign Up</NavLink>
    </StyledLoginForm>
  );
}
