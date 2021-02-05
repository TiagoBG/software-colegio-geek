const {Router} = require('express');
const router = Router();
const {createUserSchema, createGradesRegisterSchema} = require('../validation/schemas');
const validation = require('../validation/middleware');
const {sendEmail} = require('./email');
const {sendDoc} = require('../routes/documents');
const {sendImg} = require('../routes/images');

const {
    registerUser,
    setUserLogin,
    getSegStudent,
    registerStudent,
    getSubjectsByTeacher,
    getRecordsGroup,
    registerGrades,
    registerSubjects,
    getTeacheRegistrationGroup,
    getStudentsRegristrationGroup,
    registerGroups,
    registerGroupStudent,
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.get('/docente/:id',getSubjectsByTeacher);
router.post('/ver-notas/:id',getRecordsGroup);
router.patch('/editar-notas/',validation(createGradesRegisterSchema),registerGrades);
router.post('/',setUserLogin);
router.post('/register_user',registerUser);
router.post('/register_student',registerStudent);
router.post('/sendEmail/',sendEmail);
router.post('/send-doc',sendDoc);
router.post('/send-img',sendImg);
router.post('/register-subject',registerSubjects);
router.get('/registro-grupo', getTeacheRegistrationGroup);
router.post('/grupo-estudiantes', getStudentsRegristrationGroup);
router.post('/register_groups',registerGroups);
router.post('/registerGroupStudent',registerGroupStudent)

module.exports = router;