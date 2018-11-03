import { FETCH_JOKES, DELETE_JOKE } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_JOKE:
      return _.omit(state, action.payload);
    case FETCH_JOKES:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}