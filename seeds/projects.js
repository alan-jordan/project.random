
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'fosjof', content: "gsnjlgjos", categories_id: 1},
        {id: 2, name: 'rowValu', content: "gsnjlgjos", categories_id: 1},
        {id: 3, name: 'rowValu', content: "gsnjlgjos", categories_id: 2},
        {id: 4, name: 'rowValu', content: "gsnjlgjos", categories_id: 2},
        {id: 5, name: 'rowValu', content: "gsnjlgjos", categories_id: 3},
        {id: 6, name: 'rowValu', content: "gsnjlgjos", categories_id: 3},
        {id: 7, name: 'rowValu', content: "gsnjlgjos", categories_id: 4},
        {id: 8, name: 'rowValu', content: "gsnjlgjos", categories_id: 4},
        {id: 9, name: 'rowValu', content: "gsnjlgjos", categories_id: 5},
        {id: 10, name: 'rowValu', content: "gsnjlgjos", categories_id: 5},
        {id: 11, name: 'rowValu', content: "gsnjlgjos", categories_id: 6},
        {id: 12, name: 'rowValu', content: "gsnjlgjos", categories_id: 6},
      ]);
    });
};
