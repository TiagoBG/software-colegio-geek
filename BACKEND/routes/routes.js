const {Router} = require('express');
const router = Router();
const {createUserSchema} = require('../validation/schemas');
const validateUser = require('../validation/middleware');
const {sendEmail} = require('./email');
const {sendDoc} = require('../routes/documents');
const {sendImg} = require('../routes/images');

const {
    register_user,
    setUserLogin,
    getSegStudent,
    register_student,
    getSubjectsByTeacher,
    getRecordsGroup,
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.get('/docente/:id',getSubjectsByTeacher);
router.get('/ver-notas/:id',getRecordsGroup);
router.post('/',setUserLogin);
router.post('/register_user',register_user);
router.post('/register_student',register_student);
router.post('/sendEmail/',sendEmail);
router.post('/send-doc',sendDoc);
router.post('/send-img',sendImg);

module.exports = router;