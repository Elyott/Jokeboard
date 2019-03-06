
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokelist', function (table) {
    table.increments();
    table.integer('setlist_id').references('id').inTable('setlists').notNullable();
    table.integer('joke_id').references('id').inTable('jokes').notNullable();
    table.integer('order_number')
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jokelist');
};
