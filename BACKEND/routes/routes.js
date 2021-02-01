const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas');
const validateUser = require('../validation/middleware');

const {
    register_user,
    setUserLogin,
    getSegStudent,
    register_student
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.post('/',setUserLogin);
router.post('/register_user',register_user);
router.post('/register_student',register_student);

module.exports = router;