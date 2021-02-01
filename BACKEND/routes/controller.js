const pool=require('../config/database')
const fs = require('fs');
const path = require('path');
const variable = JSON.parse(fs.readFileSync(path.join(__dirname,'../variables.json')))




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
    },
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


      const registro_usuario = await pool.query(`INSERT INTO usuario (documento,nombre_completo,contrasena,correo,rol,estado)
         VALUES($1,$2,$3,$4,$5,$6)`,values.slice(0,6));

         
      const id_usuario = await pool.query(`SELECT usuario.id FROM usuario WHERE usuario.documento='${req.body.documento}'`);
   
      var fecha = new Date();   
      const  arr_aux = [id_usuario['rows'][0]['id'],fecha.getFullYear()+req.body.grado+"00"+variable.id,'https://localhost/images','https://localhost/images'];
      values.push(...arr_aux);
      variable.id++;

      setTimeout(()=>{
        fs.writeFileSync(path.join(__dirname,'../variables.json'), JSON.stringify(variable, null, 4));
      },1000)
      
      registro_estudiante = await pool.query(`INSERT INTO estudiante (tipo_documento,sexo,fecha_nacimiento,direccion,ciudad,telefono,celular,grado,id_usuario,codigo,url_foto,url_doc_identidad)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,values.slice(6,18));

      res.status(201).json({message: "Good"});

      }catch(e){
        res.status(500).json({message: "Bad",error:e});
      }
    }


    
};