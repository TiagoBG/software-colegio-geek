const { Pool } = require('pg');
const {pool}=require('../config/database')

module.exports = {

    setUserLogin: (req, res) => {
      const { correo, contrasena, rol } = req.body;
      pool.query(
        `SELECT * FROM usuario WHERE correo='${correo}' AND contrasena='${contrasena}' AND rol='${rol}'`,
        (err, resulset, fields) => {
          if (err) {
            res.json({ message: `Error` });
            return console.log(err.message);
          }
          if (resulset.rowCount > 0) {
            res.json({ message: `Bienvenido`, resulset });
          } else {
            res.json({
              message: `Info incorrecta`
            });
          }
        }
      );
    },


    getSegStudent: (req, res) => {
      const id = req.params.id;
      pool.query(
        `SELECT modelo_evaluacion.id,nombre_completo,nombre,seguimiento,autoevaluacion,coevaluacion, evaluacion_periodo FROM usuario
        INNER JOIN estudiante
        ON usuario.id=estudiante.id_usuario
        INNER JOIN modelo_evaluacion
        ON modelo_evaluacion.id_estudiante=estudiante.id
        INNER JOIN materia
        ON materia.id=modelo_evaluacion.id_materia
        WHERE usuario.id='${id}';`,
        (err, resulset, fields) => {
          if(err){
              res.sendStatus(500).json({message:"Error inesperado"});
              console.log(err);
          }else{
              res.json(resulset);
          }
          
        }
      );
    },

    getSubjectsByTeacher: (req, res) => {
      try{const id = req.params.id;
      pool.query(
        `SELECT grupo_materia.id, usuario.nombre_completo, grupo.jornada, grupo.codigo, materia.nombre FROM grupo_materia INNER JOIN usuario ON grupo_materia.id_docente=usuario.id INNER JOIN grupo ON grupo_materia.id_grupo=grupo.id INNER JOIN materia ON grupo_materia.id_materia= materia.id WHERE usuario.id=${id};`,
        (err, resulset, fields) => {
          if(err){
              res.sendStatus(500).json({message:"Error inesperado"});
              console.log(err);
              console.log("F¨*")

          }else{
              res.json(resulset);
              console.log("F¨*")

          }          
        }
      )}
      catch(e){ 
        console.log(e)}
    },    
    getRecordsGroup:(req, res) => {
      try{
        // const id = req.params.id;
      // const {nombre_materia, codigo_grupo} = req.body;
      pool.query(
        `SELECT modelo_evaluacion.id_estudiante, materia.nombre, grupo.codigo, modelo_evaluacion.id, grupo_materia.id_docente, usuario.nombre_completo, modelo_evaluacion.seguimiento, modelo_evaluacion.autoevaluacion, modelo_evaluacion.coevaluacion, modelo_evaluacion.evaluacion_periodo FROM modelo_evaluacion INNER JOIN estudiante ON modelo_evaluacion.id_estudiante = estudiante.id INNER JOIN usuario ON estudiante.id_usuario=usuario.id INNER JOIN materia ON modelo_evaluacion.id_materia = materia.id INNER JOIN grupo_estudiante ON estudiante.id= grupo_estudiante.id_estudiante INNER JOIN grupo ON grupo_estudiante.id_grupo=grupo.id INNER JOIN grupo_materia ON materia.id = grupo_materia.id_materia WHERE materia.nombre = 'Sociales' AND grupo.codigo='202106001' GROUP BY modelo_evaluacion.id_estudiante;`,
        (err, resulset, fields) => {
          if(err){
              res.sendStatus(500).json({message:"Error inesperado"});
              console.log(err);
          }else{
              res.json(resulset);
          }          
        }
      )} catch(e){
        console.log(e)
      }
    },

    register_user: async (req,res)=>{
      try{
        const {documento,nombre_completo,correo,contrasena,rol,estado} = req.body;
        await pool.query(`INSERT INTO usuario (documento,nombre_completo,contrasena,correo,rol,fecha_registro,estado) VALUES('${documento}','${nombre_completo}','${contrasena}','${correo}','${rol}',DEFAULT,'${estado}')`);
        res.status(200).json({message: "Good"});
      }catch(e){
        res.status(500).json({message:"Bad",error:e});
      } 
    }, 
    
  
};