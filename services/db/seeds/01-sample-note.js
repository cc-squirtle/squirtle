
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes')
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: "Sample note", note: 'This is a sample note provided from the seed data.'},
      ]);
    });
};
