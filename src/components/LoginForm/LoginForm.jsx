import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

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
    <div>
      <form onSubmit={handleSumbit}>
        <h2>Login</h2>

        <label className="">
          <span>Email:</span>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="">
          <span>Password:</span>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
