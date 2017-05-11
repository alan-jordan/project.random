
module.exports = {
  getCategories,
  getProject,
  getCategory
}

function getCategories (connection) {
  return connection('categories').select()
}

function getCategory(id, connection) {
  return connection('categories')
    .where('id', id)
    .first()
}

function getProject (id, connection) {
  return connection('projects')
    .where('id', id)
    .first()
}
