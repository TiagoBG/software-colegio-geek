const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas');
const validateUser = require('../validation/middleware');

const {
    register_user,
    setUserLogin,
    getSegStudent
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.post('/',setUserLogin);
router.post('/register_user',register_user);

module.exports = router;