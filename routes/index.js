var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  db.getCategories(req.app.get('connection'))
    .then(function(categories) {
      db.getProjects(req.app.get('connection'))
        .then(projects => {
          res.render('index', {categories, projects})
        })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



router.get('/project/add', (req,res) =>{
  db.getCategories(req.app.get('connection'))
    .then(categories => {
      res.render('add', {categories})
    })
})


router.get('/category/:id/random', (req, res) => {
  db.randomProject(Number(req.params.id), req.app.get('connection'), function (result) {
    res.render('project', result)
  })
})


router.post('/project/add', (req,res) => {
  db.addProject(req.body.name, req.body.content, req.body.categories_id, req.app.get('connection'))
  .then(function(project) {
    res.redirect('/')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/category/:id/all', (req, res) => {
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
