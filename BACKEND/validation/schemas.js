const Joi = require('@hapi/joi');

module.exports ={
    createUserSchema: Joi.object({
        documento: Joi.string().max(10).min(6).trim().required(),
        nombre_completo: Joi.string().trim().required(),
        correo:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().required(),
        contrasena: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).trim().required(),
        rol: Joi.required(),
        estado: Joi.required()
    }) 
};
