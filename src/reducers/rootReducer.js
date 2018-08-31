import { combineReducers } from 'redux';
import JokesReducer from './reducer_jokes';

export default combineReducers({
  jokes: JokesReducer
});