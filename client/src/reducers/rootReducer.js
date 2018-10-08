import { combineReducers } from 'redux';
import JokesReducer from './reducer_jokes';
import ActiveJoke from './reducer_active_joke';

export default combineReducers({
  jokes: JokesReducer,
  activeJoke: ActiveJoke
});