import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSumbit = event => {
    event.preventDefault();

    const formInput = event.currentTarget;

    dispatch(
      register({
        name: formInput.elements.name.value,
        email: formInput.elements.email.value,
        password: formInput.elements.password.value,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <h2>Registration</h2>

        <label className="">
          <span> Username:</span>
          <input type="text" name="name" />
        </label>

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
