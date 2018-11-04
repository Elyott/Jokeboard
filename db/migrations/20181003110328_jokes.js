
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokes', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.text('content').notNullable();
    table.string('rating').notNullable();
    table.integer('minutes');
    table.integer('seconds');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jokes');
};
