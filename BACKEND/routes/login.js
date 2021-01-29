const {Router} = require('express');
const router = Router();

router.get('/estudiante', (req, res) =>{
    res.send('<h4>Pagina Estudiante</h4>');
});

module.exports = router;
