// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

// test('getCategory gets all categories', function (t) {
//   var expected = 6
//   return db.getCategories(t.context.connection)
//     .then(function(result) {
//       var actual = result.length
//       t.is(expected, actual)
//     })
// })
// //
// test('getProject single project', function (t) {
//   var expected = 1
//   return db.getUser(1, t.context.connection)
//     .then(function (result) {
//       var actual = result[0].name
//       t.is(expected, actual)
//     })
// })
