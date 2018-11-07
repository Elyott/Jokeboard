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
      <div className={`form-group`}>
        <label className="">{label}</label>
        <div className="">
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


  render() {
    const { handleSubmit, submitting, onSubmit, title, message, linkButton, linkRoute} = this.props;

    return (
      <div className="login_container">
        <div className="form-group">
          <div className="login_title">{title}</div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            {title === 'Sign Up' &&
            <Field
              name="confirmpassword"
              type="password"
              component={this.renderField}
              label="Confirm Password"
            />
            }
            <button type="submit" disabled={submitting} className="btn btn-primary">
              {title}
            </button>
          </form>
        </div>
        <div className="signup_link">{message}
            <Link to={linkRoute} className="signup_link_button">{linkButton}</Link>
        </div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter Email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid Email'
  }

  if (!values.password) {
    errors.password = 'Please enter Password'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = 'Please enter Password again'
  } else if (values.confirmpassword.length < 6) {
    errors.confirmpassword = 'Password must be at least 6 characters'
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = 'Passwords do not match'
  }



  return errors
}

export default reduxForm({
  form: 'Login', // a unique identifier for this form
  validate
})(UserForm)
