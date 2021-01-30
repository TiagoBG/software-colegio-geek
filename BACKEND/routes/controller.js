const {cnn_mysql}=require('../config/database')
module.exports = {

    getUser: (req, res) => {
        const { correo, contrasena } = req.body;
        cnn_mysql.query(
          `SELECT * FROM usuario WHERE correo='${correo}' AND contrasena='${contrasena}'`,
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
    register_user: (req,res)=>{
        const {documento,nombre_completo,correo,contrasena} = req.body;
        res.send("ok");
    }

};