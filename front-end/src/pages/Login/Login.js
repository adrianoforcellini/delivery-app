import React, { useState } from 'react';
import './Login.css';

import socket from '../../utills/io';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, trueOrFalse] = useState(true);
  const prefix = 'common_login__';
  const passMin = 5;
  socket.on('FromAPI', (data) => {
    console.log(data);
  });

  const verifyDisabled = () => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (password.length >= passMin && re.test(user)) {
      trueOrFalse(false);
    } else {
      trueOrFalse(true);
    }
  };

  const userChange = ({ target }) => {
    setUser(target.value);
    verifyDisabled();
  };

  const passwordChange = ({ target }) => {
    setPassword(target.value);
    verifyDisabled();
  };

  const login = () => {
    socket.emit('login', { user, password });
  };

  return (
    <div className="login-Page">
      <input
        className="user-input"
        name="user"
        value={ user }
        data-testid={ `${prefix}input-email` }
        onChange={ userChange }
        placeholder="User Name"
      />
      <input
        className="password-input"
        name="password"
        data-testid={ `${prefix}input-password` }
        value={ password }
        onChange={ passwordChange }
        placeholder="Password"
      />
      <div className="buttons">
        <button
          type="button"
          className="signin-button"
          onClick={ login }
          data-testid={ `${prefix}button-login` }
          disabled={ isDisabled }
        >
          LOGIN
        </button>
        <button
          type="button"
          className="signup-button"
          data-testid={ `${prefix}button-register` }
        >
          Ainda não tenho conta
        </button>
      </div>
    </div>
  );
}

export default Login;
