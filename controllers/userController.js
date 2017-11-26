const User = require('../models/userModel')
      FB   = require('fb'),
      jwt  = require('jsonwebtoken')
      
const create = (req, res) => {
  let newUser = new User({
    
  })
}

const createFromFacebook = (accountDetails) => {
  console.log(`account detailnya adalah ${JSON.stringify(accountDetails)}`);
  let newUser = new User({
    fbId: accountDetails.id,
    name: accountDetails.name,
    email: accountDetails.email
  })
  
  console.log("sampe sini");
  
  newUser.save()
  .then(result => {
    req.headers.userDetails = result
    next()
  })
  .catch(error => {
    console.log(error)
  })
}

const fbLogin = (req, res, next) => {
  let fb = new FB.Facebook({
    appid: '1934265526828475',
    appSecret: '347e030df934b8d082c130c768610a49'
  })
  fb.setAccessToken(req.body.headers.fbid)
  fb.api('/me', {
    fields: [
      'id',
      'email',
      'name'
    ]
  },
  function (response) {
    req.headers.fbResponse = response
    next()
  })
}

const exist = (req, res, next) => {
  User.findOne({
    email: req.headers.fbResponse.email
  })
  .then(result => {
    if (result.length != 0) {
      req.headers.userDetails = result
      next()
    }
    else {
      createFromFacebook(req.headers.fbResponse)
      next()
    }
  })
  .catch(error => {
    console.log(error);
  })
}

module.exports = {
  create,
  fbLogin,
  exist
};
