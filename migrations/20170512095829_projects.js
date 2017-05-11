exports.up = function (knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('content')
    table.integer('categories_id')
    table.foreign('categories_id').references('categories.id')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('projects')
}
