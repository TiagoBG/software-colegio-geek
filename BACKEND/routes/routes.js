const {Router} = require('express');
const router = Router();
const {createUserSchema, createStudentSchema, createGradesRegisterSchema} = require('../validation/schemas');
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
    registerGroupSubject,
    registerModelsEval
} = require('./controller');

router.get('/seguimiento/:id',getSegStudent);
router.get('/docente/:id',getSubjectsByTeacher);
router.post('/ver-notas/:id',getRecordsGroup);
router.patch('/editar-notas/',validation(createGradesRegisterSchema),registerGrades);
router.post('/',setUserLogin);
router.post('/register_user',validation(createUserSchema),registerUser);
router.post('/register_student',validation(createStudentSchema),registerStudent);
router.post('/sendEmail/',sendEmail);
router.post('/send-doc',sendDoc);
router.post('/send-img',sendImg);
router.post('/register-subject',registerSubjects);
router.get('/registro-grupo', getTeacheRegistrationGroup);
router.post('/grupo-estudiantes', getStudentsRegristrationGroup);
router.post('/register_groups',registerGroups);
router.post('/registerGroupStudent',registerGroupStudent);
router.post('/registerGroupSubject',registerGroupSubject);
router.post('/registerModelsEval',registerModelsEval);

module.exports = router;