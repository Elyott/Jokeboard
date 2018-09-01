export function selectJoke(joke) {
  return{
    type: 'JOKE_SELECTED',
    joke
  }
}