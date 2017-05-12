
module.exports = {
  getCategories,
  getProject,
  getCategory,
  getCategoryList
}

function getCategories (connection) {
  return connection('categories').select()
}

function getCategory(id, connection) {
  return connection('categories')
    .where('id', id)
    .first()
}

function getCategoryList(categories_id, connection) {
  return connection('projects')
    .where('categories_id', categories_id)
}

function getProject (id, connection) {
  return connection('projects')
    .where('id', id)
    .first()
}
