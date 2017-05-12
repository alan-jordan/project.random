// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getCategories gets all categories', function (t) {
  var expected = 6
  return db.getCategories(t.context.connection)
    .then(function(result) {
      var actual = result.length
      t.is(actual, expected)
    })
})

test('getCategoryList returns the correct number of projects', function (t) {
  var expected = 2
  return db.getCategoryList(2, t.context.connection)
    .then(function(result) {
      var actual = result.length
      t.is(actual, expected)
    })
})

test('getProject gets a single project', function (t) {
  var expected = 'rowValu'
  return db.getProject(1, t.context.connection)
    .then(function(result) {
      var actual = result.name
      t.is(actual, expected)
    })
})
