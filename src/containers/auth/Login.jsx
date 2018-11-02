import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../store/login/actions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(actions.loginUser());
  }

  render() {
    return (
      <div className="col-lg-6 col-lg-offset-2">
          <div className="alert alert-info">
              Username: any<br />
              Password: any
          </div>
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="username">Username: </label>
                  <input type="text" className="form-control" name="username" required />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" className="form-control" name="password" required />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
              </div>
          </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.login.error }
}

Login = reduxForm({ form: 'login' })(Login);

export default connect(mapStateToProps, actions)(Login);
