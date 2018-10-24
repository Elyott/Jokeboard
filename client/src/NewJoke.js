import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class NewJoke extends Component {

  renderField = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error, warning }
  }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={placeholder} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    )

  render(){
    return (
      <div className="jokebook_container">
        <div className="form-group">
          Add A New Joke
          <form>
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
            {/* <div>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};



  return errors;
}

export default reduxForm({
  form: 'NewJokeForm',
  validate
})(NewJoke);