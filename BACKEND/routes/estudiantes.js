const {Router} = require('express');
const {cnn_mysql}=require('../config/database');
const router = Router();


router.get("/estudiante/:id", (req, res) => {
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
  });

module.exports = router;