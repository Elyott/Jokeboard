import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import JokesReducer from './reducer_jokes';
import ActiveJoke from './reducer_active_joke';

export default combineReducers({
  form: formReducer,
  jokes: JokesReducer,
  activeJoke: ActiveJoke
});