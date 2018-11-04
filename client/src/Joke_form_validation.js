export function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Enter a Name!";
  }

  if (!values.rating) {
    errors.rating = "Enter a Rating!";
  }

  if (!values.content) {
    errors.content = "Enter a Joke!";
  }

  if (values.seconds < 0 || values.seconds > 60) {
    errors.seconds = "Must be a number between 0 and 60!";
  }

  if (isNaN(values.minutes)) {
    errors.minutes = "Please Enter a Number!";
  }

  if (isNaN(values.seconds)) {
    errors.seconds = "Please Enter a Number!";
  }

  if (!values.minutes && values.seconds) {
    errors.minutes = "";
  }

  if (values.minutes && !values.seconds) {
    errors.seconds = "";
  }

  if ((!values.minutes && !values.seconds) || (!values.minutes && values.seconds === "0")) {
    errors.seconds = "Enter a Duration!";
    errors.minutes = "";
  }

  return errors;
}