import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import JokesReducer from './reducer_jokes';
import SetlistsReducer from './reducer_setlists';
import ActiveJoke from './reducer_active_joke';
import ActiveSetlist from './reducer_active_setlist';

export default combineReducers({
  form: formReducer,
  jokes: JokesReducer,
  setlists: SetlistsReducer,
  activeJoke: ActiveJoke,
  activeSetlist: ActiveSetlist
});