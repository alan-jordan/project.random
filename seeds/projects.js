
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'rowValu', content: "gsnjlgjos", categories_id: 1},
        {id: 2, name: 'rowValu', content: "gsnjlgjos", categories_id: 1},
        {id: 3, name: 'rowValu', content: "gsnjlgjos", categories_id: 2}
      ]);
    });
};
