
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      return knex('users').del()

    .then(function () {
      // Inserts seed entries
      return knex('users').insert({
        username: 'Bob',
        password: 'Bobber',
        email: 'bob@bob.bob',
      });
    }).then(function () {
      // Inserts seed entries
      return knex('users').insert({
        username: 'Greg',
        password: 'Gregger',
        email: 'greg@greg.greg',
      });
    });
  })
};
