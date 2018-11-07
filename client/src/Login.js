import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

class Login extends Component {

  renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
      <div className={`form-group row`}>
        <label className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-9">
          <input
            {...input}
            className="form-control"
            placeholder={label}
            type={type}
          />
        </div>
          {touched && error && <div className="text-danger">{error}</div>}
      </div>
  );

  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="login_container">
        <div className="form-group">
          <div className="login_title">Login</div>
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
        <div className="signup_link">Don't have an account?
          <Link to="/signup" className="signup_link_button"> Sign Up</Link>
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
