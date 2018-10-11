export const JOKE_SELECTED = 'JOKE_SELECTED';
export const FETCH_JOKES = 'FETCH_JOKES';

export function selectJoke(joke) {
  return {
    type: JOKE_SELECTED,
    payload: joke
  }
}

export function fetchJokes(){

  const request = (fetch("http://localhost:5000/api/jokes")
    .then(results => {
      console.log(results);
      return results.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        response: data
      });
    })
  );
  return {
    type: FETCH_JOKES,
    payload: request
  }
}