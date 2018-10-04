var knex = require('./knex.js');

function Jokes() {
  return knex('jokes');
}

// *** queries *** //

function getAll() {
  return Jokes().select();
}


module.exports = {
  getAll: getAll
};