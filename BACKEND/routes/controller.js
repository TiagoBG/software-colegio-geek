const fs = require('fs');
const path = require('path');
const variable = JSON.parse(fs.readFileSync(path.join(__dirname,'../variables.json')))
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
    /* getRecordsGroup:(req, res) => {
      const id = req.params.id;
      const {nombre_materia, codigo_grupo} = req.body;
      pool.query(
        `SELECT usuario.nombre_completo AS 'Docente',materia.id AS 'ID materia', grupo.id AS 'ID grupo', grupo.codigo AS 'Código grupo', estudiante.id AS 'ID estudiante', materia.nombre AS 'Nombre materia', estudiante.codigo AS 'Código estudiante', modelo_evaluacion.seguimiento AS 'Seguimiento', modelo_evaluacion.autoevaluacion AS 'Autoevaluación', modelo_evaluacion.coevaluacion AS 'Coevaluación', modelo_evaluacion.evaluacion_periodo AS 'Evaluación de periodo' FROM usuario
        INNER JOIN grupo
        ON usuario.id=grupo.id_docente
        INNER JOIN grupo_estudiante
        ON grupo.id=grupo_estudiante.id_grupo
        INNER JOIN materia
        INNER JOIN grupo_materia
        ON materia.id= grupo_materia.id_materia
        INNER JOIN estudiante
        INNER JOIN modelo_evaluacion
        ON estudiante.id=modelo_evaluacion.id_estudiante
        WHERE materia.nombre='${nombre_materia}' AND usuario.id='${id}' AND grupo.codigo='${codigo_grupo}'
        GROUP BY estudiante.codigo;`,
        (err, resulset, fields) => {
          if(err){
              res.sendStatus(500).json({message:"Error inesperado"});
              console.log(err);
          }else{
              res.json(resulset);
          }
          
        }
      );
    }, */

    register_user: async (req,res)=>{
      try{
        const {documento,nombre_completo,correo,contrasena,rol,estado} = req.body;
        result = await pool.query(`INSERT INTO usuario (documento,nombre_completo,contrasena,correo,rol,estado) VALUES($1,$2,$3,$4,$5,$6)`,Object.values(req.body));
        res.status(201).json({message: "Good"});
      }catch(e){
        res.status(500).json({message:"Bad",error:e});
        console.log(e);
      } 
    },
    register_student: async (req,res)=>{
      try{   

      const values = Object.values(req.body);
        console.log(values)

      const registro_usuario = await pool.query(`INSERT INTO usuario (documento,nombre_completo,contrasena,correo,rol,estado)
         VALUES($1,$2,$3,$4,$5,$6)`,values.slice(0,6));

         
      const id_usuario = await pool.query(`SELECT usuario.id FROM usuario WHERE usuario.documento='${req.body.documento}'`);
   
      var fecha = new Date();   
      const  arr_aux = [id_usuario['rows'][0]['id'],fecha.getFullYear()+req.body.grado+"00"+variable.id,'https://localhost/images','https://localhost/images'];
      values.push(...arr_aux);
      variable.id++;

      console.log(values.slice(6,17));

      setTimeout(()=>{
        fs.writeFileSync(path.join(__dirname,'../variables.json'), JSON.stringify(variable, null, 4));
      },1000)

      
      
      registro_estudiante = await pool.query(`INSERT INTO estudiante (tipo_documento,sexo,fecha_nacimiento,direccion,ciudad,telefono,celular,grado,id_usuario,codigo,url_foto,url_doc_identidad)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,values.slice(6,18));

      res.status(201).json({message: "Good"});

      }catch(e){
        console.log(e)
        res.status(500).json({message: "Bad",error:e});
        
      }
    }

}
    
  
