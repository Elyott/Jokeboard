import { JOKE_SELECTED } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case JOKE_SELECTED:
      return action.payload
    default:
      return state
  }
}