CREATE DATABASE colegio_geek;

DROP TABLE IF EXISTS modelo_evaluacion;
DROP TABLE IF EXISTS grupo_materia;
DROP TABLE IF EXISTS grupo_estudiante;
DROP TABLE IF EXISTS estudiante; 
DROP TABLE IF EXISTS grupo;
DROP TABLE IF EXISTS materia;
DROP TABLE IF EXISTS usuario;


CREATE TYPE rol_enum AS ENUM('Estudiante','Administrador','Docente');
CREATE TYPE estado_usuario_enum AS ENUM('Activo','Inactivo');
CREATE TABLE usuario(
    id SERIAL NOT NULL,
    nombre_completo VARCHAR(100) NOT NULL,
    documento VARCHAR(15) UNIQUE NOT NULL,
    correo VARCHAR(50) NOT NULL,
    contrasena VARCHAR(25),
    rol rol_enum NOT NULL,
    fecha_registro TIMESTAMP DEFAULT NOW(),
    estado estado_usuario_enum NOT NULL,
    PRIMARY KEY(id)
);

CREATE TYPE sexto_enum AS ENUM('true','false');
CREATE TYPE septimo_enum AS ENUM('true','false');
CREATE TYPE octavo_enum AS ENUM('true','false');
CREATE TYPE noveno_enum AS ENUM('true','false');
CREATE TYPE decimo_enum AS ENUM('true','false');
CREATE TYPE once_enum AS ENUM('true','false');
CREATE TABLE materia(
    id SERIAL NOT NULL, 
    codigo VARCHAR(10) UNIQUE NOT NULL, 
    nombre VARCHAR(25) NOT NULL, 
    sexto sexto_enum NOT NULL,
    septimo septimo_enum NOT NULL,
    octavo octavo_enum NOT NULL,
    noveno noveno_enum NOT NULL,
    decimo decimo_enum NOT NULL,
    once once_enum NOT NULL,
    PRIMARY KEY(id)
);

CREATE TYPE jornada_enum AS ENUM('Mañana','Tarde');
CREATE TYPE grado_enum AS ENUM('6','7','8','9','10','11');
CREATE TABLE grupo(
    id SERIAL NOT NULL, 
    codigo VARCHAR(10) UNIQUE NOT NULL, 
    id_docente INT NOT NULL,
    jornada jornada_enum NOT NULL,
    grado grado_enum,
    PRIMARY KEY(id),
    FOREIGN KEY(id_docente) REFERENCES usuario(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TYPE tipo_documento_enum AS ENUM('TI','CC','NUIP');
CREATE TYPE sexo_enum AS ENUM('Femenino','Masculino','Otro');
CREATE TABLE estudiante(
    id SERIAL NOT NULL,
    codigo VARCHAR(10) UNIQUE NOT NULL,
    id_usuario INT NOT NULL,
    tipo_documento tipo_documento_enum NOT NULL,
    sexo sexo_enum NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(100),
    ciudad VARCHAR(25),
    telefono VARCHAR(10),
    celular VARCHAR(10),
    url_foto TEXT NOT NULL,
    url_doc_identidad TEXT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_usuario) REFERENCES usuario(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TYPE estado_grupo_estudiante_enum AS ENUM('Aprobado','Reprobado','En curso'); 
CREATE TABLE grupo_estudiante(
    id SERIAL NOT NULL,
    id_grupo INT NOT NULL,
    id_estudiante INT NOT NULL,
    nota_promedio FLOAT NOT NULL,
    estado estado_grupo_estudiante_enum NOT NULL, 
    PRIMARY KEY(id),
    FOREIGN KEY(id_grupo) REFERENCES grupo(id),
    FOREIGN KEY(id_estudiante) REFERENCES estudiante(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE grupo_materia(
    id SERIAL NOT NULL,
    id_materia INT NOT NULL,
    id_grupo INT NOT NULL,
    id_docente INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_grupo) REFERENCES grupo(id),
    FOREIGN KEY(id_materia) REFERENCES materia(id),
    FOREIGN KEY(id_docente) REFERENCES usuario(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE modelo_evaluacion(
    id SERIAL NOT NULL,
    seguimiento VARCHAR(255), 
    autoevaluacion FLOAT,
    coevaluacion FLOAT,
    evaluacion_periodo FLOAT,
    id_estudiante INT NOT NULL,
    id_materia INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_estudiante) REFERENCES estudiante(id),
    FOREIGN KEY(id_materia) REFERENCES materia(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);
