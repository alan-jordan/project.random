
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'rowValu', content: "gsnjlgjos"},
        {id: 2, name: 'rowValu', content: "gsnjlgjos"},
        {id: 3, name: 'rowValu', content: "gsnjlgjos"}
      ]);
    });
};
