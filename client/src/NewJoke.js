import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createJoke, selectJoke } from './actions';

class NewJoke extends Component {

  renderField = ({
    input,
    label,
    placeholder,
    type,
    className,
    meta: { touched, error, warning }
  }) => (
      <div className={`form-group ${className}`}>
        {label && <label>{label}</label>}
        <div>
          {type === "textarea" ?
            <textarea
              {...input}
              className="form-control"
              placeholder={placeholder}
              type={type}
            />
            :
            <input
              {...input}
              className="form-control"
              placeholder={placeholder}
              type={type}
            />
          }
          <div className="text-danger">
            {touched &&
              ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
          </div>
        </div>
      </div>
    )

  onSubmit = (values) => {
    values["user_id"] = 2;
    this.props.createJoke(values, (joke) => {
      this.props.selectJoke(joke);
      this.props.history.push('/jokes');
    });
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <div className="newjoke_container">
        <div className="form-group">
          <div className="newjoke_title">Create A New Joke</div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-row">
                <Field
                  label="Joke Name"
                  name="name"
                  component={this.renderField}
                  type="text"
                  placeholder="Name of the Joke"
                  className="col-6"
                />
              <div className="form-group col-sm-2">
                <label>Rating</label>
                <div>
                  <Field name="rating" component="select" type="select" className="form-control">
                    <option />
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="F">F</option>
                  </Field>
                </div>
              </div>
              <div className="col">
                <label>Duration</label>
                <div className="form-row">
                    <Field
                      name="minutes"
                      component={this.renderField}
                      type="text"
                      placeholder="Minutes"
                      className="col"
                    />
                    <Field
                      name="seconds"
                      component={this.renderField}
                      type="text"
                      placeholder="Seconds"
                      className="col"
                    />
                </div>
              </div>
            </div>
            <div>
              <label>Content</label>
              <div>
                <Field
                  name="content"
                  component={this.renderField}
                  type="textarea"
                  placeholder="Write your joke here..."
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <Link to="/jokes" className="cancel btn btn-danger">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Enter a Name!";
  }

  if (!values.rating) {
    errors.rating = "Enter a Rating!";
  }

  if (!values.content) {
    errors.content = "Enter a Joke!"
  }

  return errors;
}

export default reduxForm({
  form: 'NewJokeForm',
  validate
})(
  connect(null,{ createJoke, selectJoke })(NewJoke)
);