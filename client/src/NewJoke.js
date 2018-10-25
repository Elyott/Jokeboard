import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewJoke extends Component {

  renderField = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error, warning }
  }) => (
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input
            {...input}
            className="form-control"
            placeholder={placeholder}
            type={type}
          />
          <div className="text-danger">
            {touched &&
              ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
          </div>
        </div>
      </div>
    )

  onSubmit = (values) => {
    console.log(values);
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <div className="newjoke_container">
        <div className="form-group">
          Add A New Joke
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label="Joke Name"
                  name="name"
                  component={this.renderField}
                  type="text"
                  placeholder="Name of the Joke"
                />
            <div>
                <Field
                  label="Duration"
                  name="minutes"
                  component={this.renderField}
                  type="text"
                  placeholder="Minutes"
                />
                :
                <Field
                  label=""
                  name="seconds"
                  component={this.renderField}
                  type="text"
                  placeholder="Seconds"
                />
            </div>
            <div>
              <label>Rating</label>
              <div>
                <Field name="rating" component="select">
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
            <div>
              <label>Content</label>
              <div>
                <Field
                  name="content"
                  component="textarea"
                  placeholder="Write your joke here..."
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <Link to="/" className="cancel btn btn-danger">Cancel</Link>
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
})(NewJoke);