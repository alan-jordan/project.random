exports.seed = function (knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({id: 1, name: 'Silly', image_url: 'my.url'}),
        knex('categories').insert({id: 2, name: 'Maps', image_url: 'my.url'}),
        knex('categories').insert({id: 3, name: 'Database', image_url: 'my.url'}),
        knex('categories').insert({id: 4, name: 'Games', image_url: 'my.url'}),
        knex('categories').insert({id: 5, name: 'Cats', image_url: 'my.url'}),
        knex('categories').insert({id: 6, name: 'Dogs', image_url: 'my.url'})
      ]);
    })
}
