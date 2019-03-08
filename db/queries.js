var knex = require('./knex.js');

function Jokes() {
  return knex('jokes');
}

function Setlists() {
  return knex('setlists');
}


// *** joke queries *** //

function getAllJokes() {
  return Jokes().select();
}

function getSingleJoke(jokeID) {
  return Jokes().where('id', parseInt(jokeID)).first();
}

function addJoke(joke) {
  return Jokes().insert(joke, 'id');
}

function updateJoke(jokeID, updates) {
  return Jokes().where('id', parseInt(jokeID)).update(updates);
}

function deleteJoke(jokeID) {
  return Jokes().where('id', parseInt(jokeID)).del();
}

// *** setlist queries *** //

function getAllSetlists() {
  return Setlists().select();
}

function getSingleSetlist(setlistID) {
  return Setlists().where('id', parseInt(setlistID)).first();
}

function addSetlist(setlist) {
  return Setlists().insert(setlist, 'id');
}

function updateSetlist(setlistID, updates) {
  return Setlists().where('id', parseInt(setlistID)).update(updates);
}

function deleteSetlist(setlistID) {
  return Setlists().where('id', parseInt(setlistID)).del();
}

// *** users queries ***

function getAllUsers() {
  return knex('users').select();
}

module.exports = {
  getAllJokes,
  getSingleJoke,
  addJoke,
  updateJoke,
  deleteJoke,
  getAllSetlists,
  getSingleSetlist,
  addSetlist,
  updateSetlist,
  deleteSetlist,
  getAllUsers
};