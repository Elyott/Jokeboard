
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('setlists').del()
    .then(function () {
      return knex('jokes').del()
        .then(function () {
          return knex('users').del()

        .then(function () {
          // Inserts seed entries
          return knex('users').insert({
            password: 'Bobber',
            email: 'bob@bob.bob',
          });
        }).then(function () {
          // Inserts seed entries
          return knex('users').insert({
            password: 'Gregger',
            email: 'greg@greg.greg',
          });
        });
      });
    });
};
