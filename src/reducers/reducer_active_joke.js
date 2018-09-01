export default function(state = null, action) {
  switch (action.type) {
    case 'JOKE_SELECTED':
      return Object.assign({}, state, {
        activeJoke: action.payload
      })
    default:
      return state
  }
}