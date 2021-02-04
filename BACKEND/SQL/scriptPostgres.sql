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
    codigo VARCHAR(15) UNIQUE NOT NULL,
    id_usuario INT NOT NULL,
    tipo_documento tipo_documento_enum NOT NULL,
    sexo sexo_enum NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(100),
    ciudad VARCHAR(25),
    telefono VARCHAR(10),
    celular VARCHAR(10),
    grado grado_enum NOT NULL,
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
    nota_promedio FLOAT NOT NULL DEFAULT 3.0,
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
INSERT INTO usuario (documento, nombre_completo, contrasena, correo, rol, estado) VALUES
('1000747248', 'Jacobo Garces Oquendo', 'JAcobo12345', 'jacobogarcesoquendo@gmail.com', 'Estudiante', 'Activo'),
('023940834', 'Santiago Betancur', 'JAcobo12345', 'santiago@gmail.com', 'Estudiante', 'Activo'),
('07979786', 'Leisy Vasquez', 'JAcobo12345', 'leisy@gmail.com', 'Estudiante', 'Activo'),
('93792331', 'Kaguya Shinomiya', 'JAcobo12345', 'kaguya@gmail.com', 'Estudiante', 'Activo'),
('322536634', 'Mai Sakurajima', 'JAcobo12345', 'mai@gmail.com', 'Estudiante', 'Activo'),
('32254', 'Chizuru Ichinose', 'JAcobo12345', 'chizuru@gmail.com', 'Estudiante', 'Activo'),
('24456573', 'Dubenis Lopez', 'JAcobo12345', 'dubenis@gmail.com', 'Docente', 'Activo'),
('55555', 'Faber Cimiki', 'JAcobo12345', 'faber@gmail.com', 'Docente', 'Activo'),
('1515151', 'Samuel Villegas', 'JAcobo12345', 'samu@gmail.com', 'Administrador', 'Activo');

INSERT INTO estudiante (codigo, id_usuario, tipo_documento, sexo, fecha_nacimiento,direccion, ciudad, telefono, celular, grado, url_foto, url_doc_identidad) VALUES
('2021001', 1, 'TI', 'Masculino', '2003-09-07', 'CRR 74 # 25C-26', 'Bello', '3146310861', '3116657131', '6', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
('2021002', 2, 'CC', 'Masculino', '2000-09-07', 'CRR111 # 747', 'Medellin', '928397', '30093283', '6', 'esfgdthneryneryhyr', 'agtagtsgfbhrsthbrr'),
('2021003', 3, 'TI', 'Femenino', '2021-01-03', 'f34f34', 'Medellín', '56345', '74687468','6', '34gf34gf34gf34', '34g3434g4g'),
('2021004', 4, 'TI', 'Femenino', '2021-01-30', 'ergwergr', 'Medellín', '6846846', '4574687','7', 'qerqetqe', 'etrbqeb'),
('2021005', 5, 'TI', 'Femenino', '2021-01-19', '5t4tgf4q', 'Medellín', '654574', '7457453','7', 'etbetb', 'ebterb'),
('2021006', 6, 'CC', 'Femenino', '2000-09-07', '3r4f3f', 'Medellín', '57457', '5758736','7', '454tgh', '4t5g4tgh54h');


INSERT INTO materia (codigo, nombre, sexto, septimo, octavo, noveno, decimo, once) VALUES
('SOC001', 'Sociales', 'true', 'true', 'true', 'true', 'true', 'true'),
('MAT001', 'Matematicas', 'true', 'true', 'true', 'true', 'true', 'true'),
('ESP001', 'Espanol', 'true', 'true', 'true', 'true', 'true', 'true'),
('EDF001', 'Educacion fisica', 'true', 'true', 'true', 'true', 'true', 'true'),
('ETI001', 'Etica', 'true', 'true', 'true', 'true', 'true', 'true');

INSERT INTO modelo_evaluacion (seguimiento, autoevaluacion, coevaluacion, evaluacion_periodo, id_estudiante, id_materia) VALUES
('5,5,5,5,3', 5, 5, 5, 1, 1),
('5,5,5,5,5', 5, 5, 5, 1, 2),
('5,4,3,3,3', 5, 5, 5, 1, 3),
('5,5,5,5,5', 5, 5, 5, 1, 4),
('4,3,3,4,4', 5, 5, 5, 1, 5),
('5,5,5,5,1', 5, 5, 5, 2, 1),
('5,5,5,5,5', 5, 5, 5, 2, 2),
('1,2,3,3,5', 5, 5, 5, 2, 3),
('5,5,5,5,5', 5, 5, 5, 2, 4),
('5,5,5,5', 5, 5, 5, 2, 5),
('5,4,4,3,3', 5, 5, 5, 3, 1),
('5,5,3,3,3,3', 5, 5, 5, 3, 2),
('5,4,3,3,3,2', 5, 5, 5, 3, 3),
('5,5,3,3,4,4,5', 5, 5, 5, 3, 4),
('5,4,4,3,3', 5, 5, 5, 3, 5),
('5,4,4,3,3', 5, 5, 5, 4, 1),
('5,5,3,3,3,3', 4, 5, 5, 4, 2),
('5,4,3,3,3,2', 5, 5, 5, 4, 3),
('5,5,3,3,4,4,5', 5, 5, 5, 4, 4),
('5,4,4,3,3', 5, 5, 5, 4, 5),
('5,5,4,3,2', 5, 5, 5, 5, 1),
('4,4,4,4,4', 5, 5, 5, 5, 2),
('4,3,2,2,3,4', 5, 5, 5, 5, 3),
('5,4,3,3,2,2', 5, 5, 5, 5, 4),
('4,4,4,4,4', 5, 5, 5, 5, 5),
('4,3,2,1,3', 5, 5, 5, 6, 1),
('5,4,3,3', 5, 5, 5, 6, 2),
('4,3,2,4', 5, 5, 5, 6, 3),
('5,4,3,2,5', 5, 5, 5, 6, 4),
('5,4,3,2,4', 5, 5, 5, 6, 5);


INSERT INTO grupo (codigo, id_docente, jornada, grado) VALUES
('202106001', 7, 'Tarde', '6'),
('202107002', 8, 'Mañana', '7');


INSERT INTO grupo_estudiante (id_grupo, id_estudiante, nota_promedio, estado) VALUES
(1, 1, 5, 'En curso'),
(1, 2, 5, 'En curso'),
(1, 3, 5, 'En curso'),
(2, 4, 5, 'En curso'),
(2, 5, 5, 'En curso'),
(2, 6, 5, 'En curso');


INSERT INTO grupo_materia (id_materia, id_grupo, id_docente) VALUES
(1, 1, 7),
(2, 1, 7),
(3, 1, 7),
(4, 1, 8),
(5, 1, 8),
(1, 2, 7),
(2, 2, 7),
(3, 2, 7),
(4, 2, 8),
(5, 2, 8);
