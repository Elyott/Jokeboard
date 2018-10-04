
exports.up = function(knex, Promise) {
  return knex.schema.table('jokes', function (table) {
    table.integer('user_id').references('id').inTable('users').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('jokes', function (table){
    table.dropColumn('user_id');
  });
};
