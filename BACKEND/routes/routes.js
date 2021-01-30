const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas/schemas');
const validateUser = require('../validation/middleware/middleware');
const {
    getStudent,
    register_user
} = require('./controller');

router.get('/',getStudent);
router.post('/register_user',validateUser(createUserSchema),register_user);


module.exports = router;