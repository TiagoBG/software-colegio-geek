const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas');
const validateUser = require('../validation/middleware');


const {
    register_user
} = require('./controller');

router.post('/register_user',validateUser(createUserSchema),register_user);


module.exports = router;