import axios from 'axios';

export const JOKE_SELECTED = 'JOKE_SELECTED';
export const FETCH_JOKES = 'FETCH_JOKES';

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