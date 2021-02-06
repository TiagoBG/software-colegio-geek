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
        contrasena: Joi.string().min(8).pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')).trim().required(),
        rol: Joi.string().pattern(new RegExp(/Estudiante|Administrador|Docente/)).required(),
        estado: Joi.string().pattern(/Activo|Inactivo/).required(),
        tipo_documento: Joi.string().pattern(/TI|CC|NUIP/).required(),
        sexo:Joi.string().pattern(/Femenino|Masculino|Otro/).required(),
        fecha_nacimiento: Joi.string().pattern(new RegExp('^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$')).required(),
        direccion: Joi.string().pattern(/^(Autopista|Avenida|Avenida Calle|Avenida Carrera|Avenida|Carrera|Calle|Carrera|Circunvalar|Diagonal|Kilometro|Transversal|AUTOP|AV|AC|AK|CL|KR|CCV|DG|KM|TV)(\s)?([a-zA-Z]{0,15}|[0-9]{1,3})(\s)?[a-zA-Z]?(\s)?(bis)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(#(\s)?[0-9]{1,2}(\s)?[a-zA-Z]?(\s)?(bis)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(-)?(\s)?[0-9]{1,3}(\s)?(Este|Norte|Occidente|Oeste|Sur)?)?((\s)?(Agrupación|Altillo|Apartamento|Apartamento Sótano|Barrio|Bloque|Bodega|Cabecera Municipal|Callejón|Camino|Carretera|Casa|Caserio|Célula|Centro|Centro Comercial|Centro Urbano|Circular|Condominio|Conjunto|Consultorio|Corregimiento|Deposito|Deposito |Sótano|Edificio|Entrada|Esquina|Etapa|Finca|Garaje|Garaje Sótano|Grada|Inferior|Inspección de Policia|Interior|Kilometro|Local|Local Mezzanine|Local Sótano|Lote|Manzana|Manzanita|Mejora|Mezzanine|Módulo|Municipio|Núcleo|Oficina|Oficina Sótano|Parcela|Parcelación|Pasaje|Penthouse|Piso|Porteria|Predio|Principal|Puente|Quebrada|Salon|Sector|Semisótano|Suite|Supermanzana|Terraza|Torre|Troncal|Unidad|Urbanización|Vereda|Via|Zona|AGN|AL|APTO|AS|BR|BL|BG|CM|CLJ|CN|CT|CA|CAS|CEL|CE|CECO|CEUR|CIR|CDM|CONJ|CS|CO|DP|DS|ED|EN|ESQ|ET|FCA|GJ|GS|GR|INF|IP|IN|KM|LC|LM|LS|LT|MZ|MZTA|MJ|MN|MD|MUN|NCO|OF|OS|PA|PCN|PSJ|PH|PI|PT|PD|PPAL|PN|QDA|SA|SEC|SS|SU|SMZ|TZ|TO|TRL|UN|URB|VDA|VIA|ZN)?(\s)?[1-9][0-9]{0,3})*$/i) ,
        ciudad: Joi.string().trim().required(),
        telefono: Joi.string().min(7).max(7).trim().required(),
        celular: Joi.string().min(11).max(11).trim().required(),
        grado: Joi.string().min(1).max(2).trim().required(),
        url_foto: Joi.string().trim().required(),
        url_doc_identidad: Joi.string().trim().required()
    }),

    createGradesRegisterSchema: Joi.object({
        seguimiento: Joi.string().pattern(new RegExp('^(?:\d+(?:\.\d*)?|\.\d+)(?:,(?:\d+(?:\.\d*)?|\.\d+))*$')),
        autoevaluacion: Joi.string().pattern(new RegExp('^\d*\.?\d*$')),
        coevaluacion: Joi.string().pattern(new RegExp('^\d*\.?\d*$')),
        evaluacion_periodo: Joi.string().pattern(new RegExp('^\d*\.?\d*$'))
    })

};
