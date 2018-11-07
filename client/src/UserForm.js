import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

class UserForm extends Component {

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
        <div className="signup_link">New to Jokebook?
          <Link to="/signup" className="signup_link_button"> Create an account</Link>
        </div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }


  return errors
}

export default reduxForm({
  form: 'Login', // a unique identifier for this form
  validate
})(UserForm)
