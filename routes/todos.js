const router = require('express').Router(),
      Token  = require('../middlewares/tokenManager')
      Todo   = require('../controllers/todoController')
      
router.get('/', Token.verify, Todo.getAll)
router.post('/', Token.verify, Todo.create)

module.exports = router;
