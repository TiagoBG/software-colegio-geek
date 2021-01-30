const {Router} = require('express');
const {cnn_mysql}=require('../config/database');
const router = Router();


router.get("/seguimiento/:id", (req, res) => {
    const id = req.params.id;
    cnn_mysql.query(
      `SELECT modelo_evaluacion.id,nombre_completo,nombre,seguimiento,autoevaluacion,coevaluacion, evaluacion_periodo FROM usuario
      INNER JOIN estudiante
      ON usuario.id=estudiante.id_usuario
      INNER JOIN modelo_evaluacion
      ON modelo_evaluacion.id_estudiante=estudiante.id
      INNER JOIN materia
      ON materia.id=modelo_evaluacion.id_materia
      WHERE usuario.id=${id};`,
      (err, resulset, fields) => {
        if(err){
            res.sendStatus(500).json({message:"Error inesperado"});
            console.log(err);
        }else{
            res.json(resulset);
        }
        
      }
    );
  });

module.exports = router;