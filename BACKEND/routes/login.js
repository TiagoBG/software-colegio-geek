const {Router} = require('express');
const {cnn_mysql}=require('../config/database');
const router = Router();


router.post("/", (req, res) => {
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
  });

  


module.exports = router;
