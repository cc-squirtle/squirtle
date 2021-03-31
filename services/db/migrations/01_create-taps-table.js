exports.up = function(knex) {
    return knex.schema.createTable('taps', (table) => {
        table.increments();
        table.integer('mymizu_id').notNullable();
        table.string('name');
        table.float('longitude');
        table.float('latitude');
        table.string('address', 500);
        table.string('comment', 500);
        table.string('photo_url');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('taps');
};
