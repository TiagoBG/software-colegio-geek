const Joi = require('@hapi/joi');

module.exports ={

    
    createUserSchema: Joi.object({
        documento: Joi.string().max(10).min(6).trim().required(),
        nombre_completo: Joi.string().trim().required(),
        correo:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().required(),
        contrasena: Joi.string().min(8).pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')).trim().required(),
        rol: Joi.string().pattern(new RegExp(/Estudiante|Administrador|Docente/)).required(),
        estado: Joi.string().pattern(/Activo|Inactivo/).required()
    }),

    createStudentSchema: Joi.object({
        documento: Joi.string().max(10).min(6).trim().required(),
        nombre_completo: Joi.string().trim().required(),
        correo:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().required(),
        contrasena: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).trim().required(),
        rol: Joi.string().pattern(new RegExp(/Estudiante|Administrador|Docente/)).required(),
        estado: Joi.string().pattern(/Activo|Inactivo/).required(),
        tipo_documento: Joi.string().pattern(new RegExp('TI|CC|NUIP')).required(),
        sexo:Joi.string().pattern(/Femenino|Masculino|Otro/).required(),
        fecha_nacimiento: Joi.string().pattern(new RegExp('^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$')).required(),
         
    }),

    createGradesRegisterSchema: Joi.object({
        seguimiento: Joi.string().pattern(new RegExp('^(?:\d+(?:\.\d*)?|\.\d+)(?:,(?:\d+(?:\.\d*)?|\.\d+))*$')),
        autoevaluacion: Joi.string().pattern(new RegExp('^\d*\.?\d*$')),
        coevaluacion: Joi.string().pattern(new RegExp('^\d*\.?\d*$')),
        evaluacion_periodo: Joi.string().pattern(new RegExp('^\d*\.?\d*$'))
    })

};
