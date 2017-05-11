
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, image_url: 'my.url'},
        {id: 2, image_url: 'my.url'},
        {id: 3, image_url: 'my.url'}
      ]);
    });
};
