const {cnn_mysql}=require('../config/database');
const {pool}=require('../config/database');

module.exports = {

    setUserLogin: (req, res) => {
      const { correo, contrasena, rol } = req.body;
      cnn_mysql.query(
        `SELECT * FROM usuario WHERE correo='${correo}' AND contrasena='${contrasena}' AND rol='${rol}'`,
        (err, resulset, fields) => {
          if (err) {
            res.json({ message: `Error` });
            return console.log(err.message);
          }
          if (resulset.length > 0) {
            res.json({ message: `Bienvenido`, resulset });
          } else {
            res.json({
              message: `Info incorrecta`
            });
          }
        }
      );
    },

    getUserId: (req, res) => {
      const id = req.params.id;
      cnn_mysql.query(
        `SELECT nombre_completo FROM usuario WHERE id='${id}'`,
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

    getSegStudent: (req, res) => {
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
    },
    register_user: async (req,res)=>{
      try{
        const {documento,nombre_completo,correo,contrasena,rol,estado} = req.body;
        //await pool.query(`INSERT INTO usuario (documento,nombre_completo,contrasena,correo,rol,fecha_registro,estado) VALUES('${documento}','${nombre_completo}','${contrasena}','${correo}','${rol}',DEFAULT,'${estado}')`);
        res.status(200).json({message: "Good"});
      }catch(e){
        console.log(e)
        res.status(500).json({message:"Bad",error:e});
      } 
    }

};