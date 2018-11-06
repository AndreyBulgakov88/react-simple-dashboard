import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../store/login/actions';

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span style={{color: 'red', fontWeight: 700}}>{error}</span>) 
               || (warning && <span style={{color: 'red', fontWeight: 700}}>{warning}</span>))}
    </div>
  </div>
)

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  const submit = values => props.dispatch(actions.loginUser(values.username, values.password));

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="form-group">
        <Field name="username" type="text"
          component={renderField} label="Username"
          validate={[ required ]}
        />
      </div>
      <div className="form-group">
        <Field name="password" type="password"
          component={renderField} label="Password"
          validate={[ required ]}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" disabled={pristine || submitting}>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'login' })(LoginForm);
