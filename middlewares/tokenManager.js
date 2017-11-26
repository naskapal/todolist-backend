require('dotenv').config()
const jwt = require('jsonwebtoken');

const secretkey = process.env.JWT_SECRET

const generate = (req, res, next) => {
  jwt.sign({
    name : req.headers.userDetails.name,
    email : req.headers.userDetails.email
  },
  secretkey, (err, token) => {
    if (err) {
      console.log(err);
    }
    else {
      res.status(200).send(token)
    }
  })
}

const verify = (req, res, next) => {
  jwt.verify(req.headers.uid, secretkey, (err, payload) => {
    
    //if success
  })
}

module.exports = {
  generate,
  verify
};
