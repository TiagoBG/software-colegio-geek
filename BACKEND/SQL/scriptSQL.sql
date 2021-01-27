CREATE DATABASE colegio_geek;
USE colegio_geek;

DROP TABLE IF EXISTS estudiante; 
DROP TABLE IF EXISTS grupo;
DROP TABLE IF EXISTS grado_cursado;
DROP TABLE IF EXISTS usuario;

CREATE TABLE usuario(
    id INT UNSIGNED AUTO_INCREMENT,
    documento VARCHAR(15) UNIQUE NOT NULL,
    nombre_completo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(25),
    correo VARCHAR(50) NOT NULL,
    rol ENUM('E','A','D') NOT NULL,
    fecha_acceso DATETIME COMMENT "Puedo ser borrada",
    fecha_registro DATETIME DEFAULT NOW(),
    estado ENUM ('A','I') NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE grupo(
    id INT UNSIGNED AUTO_INCREMENT,
    codigo VARCHAR(10) UNIQUE NOT NULL, 
    id_docente INT UNSIGNED NOT NULL,
    jornada ENUM('M','T') NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_docente) REFERENCES usuario(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE estudiante(
    id INT UNSIGNED AUTO_INCREMENT, 
    codigo VARCHAR(10) UNIQUE NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    tipo_documento ENUM('TI','CC','NUIP') NOT NULL,
    sexo ENUM('F','M','O') NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(100),
    ciudad VARCHAR(25),
    telefono_residencia VARCHAR(10),
    telefono_celular VARCHAR(10),
    url_foto TEXT NOT NULL,
    url_doc_identidad TEXT NOT NULL,
    id_grupo INT UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(id_usuario) REFERENCES usuario(id),
    FOREIGN KEY(id_grupo) REFERENCES grupo(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE grado_cursado(
    id INT UNSIGNED AUTO_INCREMENT,
    id_estudiante INT UNSIGNED NOT NULL,
    nota_promedio FLOAT NOT NULL,
    estado ENUM ('A','R','C') NOT NULL,
    grado INT UNSIGNED NOT NULL,
    año INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_estudiante) REFERENCES estudiante(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);



