require('dotenv').config()
const mongoose = require('mongoose').connect(process.env.DB_PATH),
      Schema = mongoose.Schema,
      check = require('validator');

let todoSchema = mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  task: String,
  completion: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending'
  }
  //add teamid if all succes
})

const todoModel = mongoose.model('Todo', todoSchema)

module.exports = todoModel;
