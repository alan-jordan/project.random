exports.up = function (knex, Promise) {
  return knex.schema.createTable('images', function (table) {
    table.increments('id').primary()
    table.string('image_url')
    table.integer('categories_id')
    table.foreign('categories_id').references('categories.id')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('images')
}
