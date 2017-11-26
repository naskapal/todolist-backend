const router = require('express').Router(),
      Token  = require('../middlewares/tokenManager')
      
      
router.get('/', Token.verify, )

module.exports = router;
