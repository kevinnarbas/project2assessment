var express = require('express');
var router = express.Router();
var Todo = require('../models/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Project 2 assessment', 
    todos: Todo.getAll()
  });
});

router.post('/', function(req, res) {
  req.body.done = false;
  Todo.getAll().push(req.body)
  console.log(req.body)
  res.redirect('/')
});

router.delete('/:id', function(req, res) {
  Todo.getAll().splice(req.params.id, 1);
  res.redirect('/');
});


module.exports = router;
