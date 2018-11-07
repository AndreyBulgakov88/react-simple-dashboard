import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {

  render() {
    return (
      <div className="col-lg-6 col-lg-offset-2">
        <div className="alert alert-info">
          Username: any<br />
          Password: any
        </div>
        <h2>Login</h2>
        <LoginForm />
      </div>
    )
  }
}

export default Login;
