import { FETCH_SETLISTS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SETLISTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}