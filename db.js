
module.exports = {
  getCategories,
  getProject,
  getCategory,
  getCategoryList,
  randomProject,
  addProject,
  getProjects

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


function randomProject(categories_id, connection, callback) {
  return getCategoryList(categories_id, connection)
  .then ((categoriesArray) => {
    arrLength = categoriesArray.length
    let index = Math.round(Math.random()* arrLength )
    let returnedObject = categoriesArray[index]
    callback(returnedObject)
  })
}

function getProjects(connection) {
  return connection('projects')
}

function addProject(name, content, id, connection) {
  return connection('projects')
  .insert({name, content, categories_id: id})
}
