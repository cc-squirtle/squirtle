exports.up = function(knex) {
    return knex.schema.table('taps', function (table) {
        table.string('list');
    })
};

exports.down = function(knex) {
    return knex.schema.table('taps', function(table) {
        table.dropColumn('list');
    })
};

