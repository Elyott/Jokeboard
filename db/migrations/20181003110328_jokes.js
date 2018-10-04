
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokes', function (table) {
    table.increments();
    table.string('name').notNullable().unique();
    table.text('content').notNullable();
    table.string('rating').notNullable();
    table.integer('minutes').notNullable();
    table.integer('seconds').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jokes');
};
