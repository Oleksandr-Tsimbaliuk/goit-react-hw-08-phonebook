import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSumbit = event => {
    event.preventDefault();

    const formInput = event.currentTarget;

    dispatch(
      logIn({
        email: formInput.elements.email.value,
        password: formInput.elements.password.value,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <h2>Login</h2>

        <label className="">
          <span>Email:</span>
          <input type="text" name="email" />
        </label>

        <label className="">
          <span>Password:</span>
          <input type="text" name="password" />
        </label>

        <button className="" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
