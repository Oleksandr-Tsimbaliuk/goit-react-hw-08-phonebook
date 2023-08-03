import { Notify } from 'notiflix';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import { StyledUserMenu } from './Styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  function pressLogOut() {
    dispatch(logOut());
    Notify.success(`User ${userName} successfully logged out`);
  }

  return (
    <StyledUserMenu>
      <p className="userName">Welcome,{userName}</p>
      <button className="userBtn" type="button" onClick={() => pressLogOut()}>
        Log out
      </button>
    </StyledUserMenu>
  );
}
