var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  db.getCategories(req.app.get('connection'))
    .then(function(categories) {
      res.render('index', {categories})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/category/:id', (req, res) => {
  db.getCategory(req.params.id, req.app.get('connection'))
    .then(function(category) {
      res.render('category', category)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/project/:id', (req, res) => {
  db.getProject(req.params.id, req.app.get('connection'))
    .then(function(project) {
      res.render('project', project)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
