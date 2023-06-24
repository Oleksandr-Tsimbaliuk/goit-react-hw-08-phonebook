import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <>
      <p>Welcome,{userName}</p>
      <button className="" type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </>
  );
}
