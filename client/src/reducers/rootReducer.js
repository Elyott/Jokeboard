import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import JokesReducer from './reducer_jokes';
import SetlistsReducer from './reducer_setlists';
import ActiveJoke from './reducer_active_joke';

export default combineReducers({
  form: formReducer,
  jokes: JokesReducer,
  setlists: SetlistsReducer,
  activeJoke: ActiveJoke
});