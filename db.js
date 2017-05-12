
module.exports = {
  getCategories,
  getProject,
  getCategory,
  getCategoryList,
  randomProject
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
    let index = Math.round(Math.random()* arrLength)
    console.log(categoriesArray);
    let returnedObject = categoriesArray[index]
    console.log("from random project", returnedObject);
    callback(returnedObject)
  })
}
