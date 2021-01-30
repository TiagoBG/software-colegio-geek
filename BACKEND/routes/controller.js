const {pool}=require('../config/database')

module.exports = {
    register_user: async (req,res)=>{
        try{
          const {documento,nombre_completo,correo,contrasena,rol,estado} = req.body;
          await pool.query(`INSERT INTO usuario (documento,nombre_completo,contrasena,correo,rol,fecha_registro,estado) VALUES('${documento}','${nombre_completo}','${contrasena}','${correo}','${rol}',DEFAULT,'${estado}')`);
          res.status(200).json({message: "Good"});
        }catch(e){
          res.status(500).json({message:"Bad",error:e});
        } 
    }
};