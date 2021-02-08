const express = require("express");
const router = express.Router();
const { pool } = require("../config/database");
const path = require('path')
const pdf = require("html-pdf");

module.exports = {
  studentsGradesReport: async (req, res) => {

    try {
      const codigo = req.params.id;
      const id = await pool.query(
        `SELECT estudiante.id FROM estudiante WHERE codigo = '${codigo}'`
      );
      const result = await pool.query(
        `SELECT modelo_evaluacion.id,materia.nombre as nombre_materia,nombre_completo,nombre,seguimiento,autoevaluacion,coevaluacion, evaluacion_periodo FROM usuario
                  INNER JOIN estudiante
                  ON usuario.id=estudiante.id_usuario
                  INNER JOIN modelo_evaluacion
                  ON modelo_evaluacion.id_estudiante=estudiante.id
                  INNER JOIN materia
                  ON materia.id=modelo_evaluacion.id_materia
                  WHERE usuario.id='${id.rows[0].id}';`
      );

    res.status(201).json({ state: 1, message: result}); 

    } catch (e) {
        res.status(500).json({ state: 0, message: "Bad", error: e });
    }
  }


};



/*let contentHtml = `
            <!doctype html>
                <html>
                <head>
                        <meta charset="utf-8">
                        <title>PDF Result Template</title>
                        <style>
                                table {
                                border-collapse: collapse;
                                border-spacing: 0;
                                width: 100%;
                                border: 1px solid #ddd;
                                }
                                th{
                                    border-bottom: 2px solid light-gray;
                                }
                                th, td {
                                text-align: left;
                                padding: 3px;
                                }

                                tr:nth-child(even) {
                                background-color: #f2f2f2;
                                }
                        </style>
                    </head>
                    <body>
                        <h1>${result.rows[0].nombre_completo}</h1>
                        <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Materia</th>
                                            <th scope="col">Seguimiento</th>
                                            <th scope="col">Autoevaluación</th>
                                            <th scope="col">Coevaluación</th>
                                            <th scope="col">Final</th>
                                        </tr>
                                    </thead>
                                    <tbody>`; */