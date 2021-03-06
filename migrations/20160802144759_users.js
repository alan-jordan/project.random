exports.up = function (knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('image_url')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('categories')
}
