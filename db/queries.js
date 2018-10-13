var knex = require('./knex.js');

function Jokes() {
  return knex('jokes');
}

// *** queries *** //

function getAll() {
  return Jokes().select();
}

function getSingle(jokeID) {
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

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  addJoke: addJoke,
  updateJoke: updateJoke,
  deleteJoke: deleteJoke
};