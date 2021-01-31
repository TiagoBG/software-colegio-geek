const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas');
const validateUser = require('../validation/middleware');

const {
    register_user,
    setUserLogin,
    getUserId,
    getSegStudent
} = require('./controller');

router.get('/estudiante/:id',getUserId);
router.get('/seguimiento/:id',getSegStudent);
router.post('/',setUserLogin);
router.post('/register_user',validateUser(createUserSchema),register_user);

module.exports = router;