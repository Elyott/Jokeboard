import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

class Login extends Component {

  renderField = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
  }) => (
      <div className={`form-group ${className}`}>
        <label>{label}</label>
          <input
            {...input}
            className="form-control"
            placeholder={label}
            type={type}
          />
          {touched && error && <div className="text-danger">{error}</div>}
      </div>
  );

  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="newjoke_container">
        <div className="form-group">
          <div className="newjoke_title">Login</div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="email"
              type="email"
              component={this.renderField}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={this.renderField}
              label="Password"
            />
            <button type="submit" disabled={submitting} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {}

  return errors
}

export default reduxForm({
  form: 'Login', // a unique identifier for this form
  validate
})(Login)
