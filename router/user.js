const {getUser, getUserById,postUser} = require('../controllers/user')

const {check} = require('express-validator')

const express = require('express')
const validator = require('../Validatior/userValidator')


const router = express.Router()

router.get('/',getUser)
router.get('/:id',getUserById)
router.post('/',validator.createUserValidator, postUser)

// router.post('/' , 
// [check('userName')
// .isLength({ min: 5 })
// .withMessage('must be at least 5 chars long')],
// userController.postUser
// )


module.exports = router



//Either this way
// module.exports = {
//   userGet
// }
