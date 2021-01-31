const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas');
const validateUser = require('../validation/middleware');

const {
    register_user,
    setUserLogin,
    getSegStudent,
    getSubjectsByTeacher,
    getGroupsByTeacher,
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.get('/docente/:id',getSubjectsByTeacher);
router.post('/',setUserLogin);
router.post('/register_user',validateUser(createUserSchema),register_user);


module.exports = router;