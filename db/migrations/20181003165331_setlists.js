
exports.up = function(knex, Promise) {
  return knex.schema.createTable('setlists', function (table) {
    table.increments();
    table.string('name').notNullable().unique();
    table.json('joke_list').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('setlists');
};
