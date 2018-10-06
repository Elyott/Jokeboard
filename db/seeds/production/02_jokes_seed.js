exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Suits',
        content: 'Suits make you look like a wanker',
        rating: 'B-',
        minutes: 3,
        seconds: 20,
        user_id: 1,
      });
    }).then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Ballons',
        content: 'Balloons make you look like a wanker',
        rating: 'A',
        minutes: 1,
        seconds: 35,
        user_id: 2,
      });
    });
};
