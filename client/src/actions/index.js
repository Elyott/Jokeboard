import axios from 'axios';

export const JOKE_SELECTED = 'JOKE_SELECTED';
export const FETCH_JOKES = 'FETCH_JOKES';
export const CREATE_JOKE = 'CREATE_JOKE';
export const FETCH_JOKE = 'FETCH_JOKE';
export const DELETE_JOKE = 'DELETE_JOKE';
export const UPDATE_JOKE = 'UPDATE_JOKE';

export function selectJoke(joke) {
  return {
    type: JOKE_SELECTED,
    payload: joke
  }
}

export function fetchJokes(){

  const request = axios.get('/api/jokes')

  return {
    type: FETCH_JOKES,
    payload: request
  }
}

export function createJoke(values, callback) {
  const request = axios.post('/api/jokes', values)
    .then(function (response) {
      console.log(response);
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    }).then(result => callback(result));

  return {
    type: CREATE_JOKE,
    payload: request
  }
}

export function fetchJoke(id) {
  const request = axios.get(`api/jokes/${id}`);

  return {
    type: FETCH_JOKE,
    payload: request
  };
}

export function deleteJoke(id, callback) {
  axios.delete(`/api/jokes/${id}`)
    .then(() => callback());

  return {
    type: DELETE_JOKE,
    payload: id
  }
}

export function updateJoke(values, callback) {
  const request = axios.put(`/api/jokes/${values.id}`, values)
    .then(function (response) {
      console.log(response);
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    }).then(result => callback(result));

  return {
    type: UPDATE_JOKE,
    payload: request
  }
}