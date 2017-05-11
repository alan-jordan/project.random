// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getCategory gets all categories', function (t) {
  var expected = 6
  return db.getCategories(t.context.connection)
    .then(function(result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getProject gets a single project', function (t) {
  var expected = 'rowValu'
  return db.getProject(1, t.context.connection)
    .then(function(result) {
      var actual = result.name
      t.is(expected, actual)
    })
})
