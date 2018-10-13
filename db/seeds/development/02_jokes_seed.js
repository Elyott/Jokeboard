exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Suits',
        content: 'This is a test joke about suits',
        rating: 'B-',
        minutes: 3,
        seconds: 20,
        user_id: 1,
      });
    }).then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Balloons',
        content: 'This is a test joke about balloons',
        rating: 'A',
        minutes: 1,
        seconds: 35,
        user_id: 2,
      });
    }).then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Samurai',
        content: 'This is a test joke about samurais',
        rating: 'C',
        minutes: 2,
        seconds: 7,
        user_id: 1,
      });
    }).then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Samurai',
        content: 'This is a test joke about samurais',
        rating: 'C',
        minutes: 2,
        seconds: 7,
        user_id: 1,
      });
    }).then(function () {
      // Inserts seed entries
      return knex('jokes').insert({
        name: 'Coffee',
        content: 'This is a test joke about coffee',
        rating: 'A+',
        minutes: 1,
        seconds: 30,
        user_id: 2,
      });
    });
};
