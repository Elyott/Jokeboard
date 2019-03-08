
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('setlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('setlists').insert({
        name: 'Tight Five',
        user_id: 1,
      });
    });
};
