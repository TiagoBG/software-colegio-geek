const express = require('express');
const router = express.Router();
const { pool } = require("../config/database");

module.exports = {
    studentsGradesReport: async(req,res)=>{
        try{
            const id = req.params.id;
            const result = await pool.query(
                `SELECT modelo_evaluacion.id,nombre_completo,nombre,seguimiento,autoevaluacion,coevaluacion, evaluacion_periodo FROM usuario
                  INNER JOIN estudiante
                  ON usuario.id=estudiante.id_usuario
                  INNER JOIN modelo_evaluacion
                  ON modelo_evaluacion.id_estudiante=estudiante.id
                  INNER JOIN materia
                  ON materia.id=modelo_evaluacion.id_materia
                  WHERE usuario.id='${id}';`    
              );
              res.send(result)
        }catch(e){
            console.log(e)
        }
    
    }
}