
exports.up = function(knex, Promise) {
  return knex.schema.table('setlists', function (table) {
    table.dropColumn('joke_list');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('setlists', function (table) {
    table.json('joke_list');
  });
};
