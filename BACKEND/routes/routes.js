const {Router} = require('express');
const router = Router();
const {createUserSchema, createGradesRegisterSchema} = require('../validation/schemas');
const validation = require('../validation/middleware');
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
    registerGrades,
    register_subjects,
    getTeacheRegistrationGroup
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.get('/docente/:id',getSubjectsByTeacher);
router.post('/ver-notas/:id',getRecordsGroup);
router.patch('/editar-notas/',registerGrades, validation(createGradesRegisterSchema));
router.post('/',setUserLogin);
router.post('/register_user',register_user);
router.post('/register_student',register_student);
router.post('/sendEmail/',sendEmail);
router.post('/send-doc',sendDoc);
router.post('/send-img',sendImg);
router.post('/register-subject',register_subjects);
router.get('/registro-grupo', getTeacheRegistrationGroup);

module.exports = router;