import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const userChange = ({ target }) => {
    setUser(target.value);
  };
  const passwordChange = ({ target }) => {
    setPassword(target.value);
  };
  const login = () => {
    console.log(`Login sucessful to ${user} with ${password}`);
  };
  return (
    <div className="login-Page">
      <input
        className="user-input"
        name="user"
        value={ user }
        onChange={ userChange }
        placeholder="User Name"
      />
      <input
        className="password-input"
        name="password"
        value={ password }
        onChange={ passwordChange }
        placeholder="Password"
      />
      <div className="buttons">
        <button type="button" className="signin-button" onClick={ login }>
          LOGIN
        </button>
        <button type="button" className="signup-button">
          Ainda não tenho conta
        </button>
      </div>
    </div>
  );
}

export default Login;
