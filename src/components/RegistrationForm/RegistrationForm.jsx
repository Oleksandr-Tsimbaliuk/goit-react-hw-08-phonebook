import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      register({
        name: formInput.elements.name.value,
        email: formInput.elements.email.value,
        password: formInput.elements.password.value,
      })
    );
    resetState();
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <h2>Registration</h2>

        <label className="">
          <span> Username:</span>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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
          Sign up
        </button>
      </form>
    </div>
  );
}

// const handleChange = ({ target: { name, value } }) => {
//   switch (name) {
//     case 'name':
//       return setName(value);
//     case 'email':
//       return setEmail(value);
//     case 'password':
//       return setPassword(value);
//     default:
//       return;
//   }
// };
