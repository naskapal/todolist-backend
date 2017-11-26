const Todo = require('../models/todoModel');

const getAll = (req, res, next) => {
  Todo.find({
    author: req.headers.id
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const create = (req, res, next) => {
  let task = new Todo ({
    author: req.headers.userid,
    task: req.body.task
  })
  
  task.save()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  getAll,
  create
};
