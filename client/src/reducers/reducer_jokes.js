import { FETCH_JOKES } from '../actions/index';


export default function(state = null, action) {
  switch (action.type) {
    case FETCH_JOKES:
      return action.payload
    default:
      return state
  }
}