import React from 'react';
// import { useDispatch } from 'react-redux';

export default function RegisterForm() {
  //   const dispatch = useDispatch();

  return (
    <div>
      <form autoComplete="off">
        <h2>form</h2>
        <label htmlFor="">
          <span>Email</span>
          <input type="text" />
        </label>

        <label htmlFor="">
          <span>Password</span>
          <input type="text" />
        </label>

        <button className="" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
