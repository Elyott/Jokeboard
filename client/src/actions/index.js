import axios from 'axios';

export const JOKE_SELECTED = 'JOKE_SELECTED';
export const FETCH_JOKES = 'FETCH_JOKES';
export const CREATE_JOKE = 'CREATE_JOKE';
export const FETCH_JOKE = 'FETCH_JOKE';
export const DELETE_JOKE = 'DELETE_JOKE';
export const UPDATE_JOKE = 'UPDATE_JOKE';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export function createUser(values, callback) {
  const request = axios.post('/auth/register', values)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    }).then(() => callback());

  return {
    type: CREATE_USER,
    payload: request
  }
}

export function loginUser(values, callback) {
  const request = axios.post('/auth/login', values)
    .then(function (response) {
      console.log('Login: ' + response)
    })
    .catch(function (error) {
      console.log(error);
    }).then(() => callback());

  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function logoutUser(callback) {
  const request = axios.get('/auth/logout')
    .then(function (response) {
      console.log('Logout: ' + response)
    })
    .catch(function (error) {
      console.log(error);
    }).then(() => callback());

  return {
    type: LOGOUT_USER,
    payload: request
  }
}



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