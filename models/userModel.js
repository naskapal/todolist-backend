require('dotenv').config()
const mongoose = require('mongoose').connect(process.env.DB_PATH),
      Schema = mongoose.Schema,
      check = require('validator');

let userSchema = mongoose.Schema({
  // will enable email when all works
  // teamId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'name'
  // },
  fbId: String,
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return check.isEmail(v)
      },
      message: "error nih emailnya"
    }
  },
  name: String,
  password: {
    type: String,
    default: ''
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: "Todo"
  }]
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;
