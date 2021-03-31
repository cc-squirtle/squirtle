
exports.up = function(knex) {
    return knex.schema.createTable('notes', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.text('note').notNullable();
        table.string('user_id');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('notes');
};
