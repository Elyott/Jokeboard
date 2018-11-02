import axios from 'axios';

export const JOKE_SELECTED = 'JOKE_SELECTED';
export const FETCH_JOKES = 'FETCH_JOKES';
export const CREATE_JOKE = 'CREATE_JOKE';

export function selectJoke(joke) {
  return {
    type: JOKE_SELECTED,
    payload: joke
  }
}

export function fetchJokes(){

  const request = axios.get("/api/jokes")

  return {
    type: FETCH_JOKES,
    payload: request
  }
}

export function createJoke(values) {
  const request = axios.post("/api/jokes", values).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    type: CREATE_JOKE,
    payload: request
  }
}