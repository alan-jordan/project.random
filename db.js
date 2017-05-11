
module.exports = {
  getCategories,
  getProject
}

function getCategories (connection) {
  return connection('categories').select()
}

function getProject (id, connection) {
  return connection('projects').where('id', id)
}
