const router = require('express').Router(),
      User   = require('../controllers/userController'),
      Token  = require('../middlewares/tokenManager')

// router.get('/login', )
// router.post('/register', User.create)
router.post('/fblogin', User.fbLogin, User.exist, Token.generate)

module.exports = router;
