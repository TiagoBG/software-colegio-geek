import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import api from "../axios/axios";
import { getFromLocal, saveToLocal } from '../functions/localStorage';

export default function AssigningGroupStudent() {
    const [infoUsuario, setInfoUsuario] = useState([]);
    const grado = getFromLocal("grado");
    console.log(grado);
    const jornada = getFromLocal("jornada");
    const director_grupo = getFromLocal("director_grupo");
    let registro;
    useEffect(() => {
        showStudentGrade();
    }, []);

    function showStudentGrade() {
        if (grado) {
            api.post(`/grupo-estudiantes`, {'grado': grado}).then(
                (res) => {
                    registro = res.data.rows;
                    console.log(registro);
                }
            );
        }
        console.log(infoUsuario)
    }

    return (
        <section className="container-fluid w-100">
            <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
                <div className='mx-auto mb-4'>
                    <h3 className="text-center">Estudiantes registrados para el grado {grado}</h3>
                </div>
                <div className='mx-auto'>
                    <a href="/docente" className='mx-4'><Button variant='danger' className='mt-4 px-5'><b>Regresar</b></Button></a>
                </div>
                <div className='mb-5 mt-4'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">Estudiante</th>
                                <th scope="col">Seguimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {infoUsuario.map((info) => (
                                <tr key={info.id} className='notasXEstudiante' id={info.id}>
                                    <td>{info.codigo}</td>
                                    <td>{info.nombre_completo}</td>
                                    <td></td>
                                    <td><Button className='btn btn-info' onClick={() => {
                                        saveToLocal("id_estudiante", info.id);
                                        saveToLocal("nombre_estudiante", info.nombre_completo);
                                        saveToLocal("id_materia", info.id_materia);
                                        window.location.href = "/editar-notas"
                                    }
                                    }>Editar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </section>
    )
}