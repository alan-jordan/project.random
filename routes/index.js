var express = require('express')
var router = express.Router()

var db = require('../db')

// router.get('/', function (req, res) {
//   db.getUsers(req.app.get('connection'))
//     .then(function(users) {
//       res.render('index', { users: users })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/categories/:id', (req, res) => {
  // db.getCategories(req.params.id, req.app.get('connection'))
    // .then(function(categories) {
    category = {id: 1, name: 'Funny'}
      res.render('categories', category)
    // })
    // .catch(function (err) {
    //   res.status(500).send('DATABASE ERROR: ' + err.message)
    // })
})



module.exports = router
