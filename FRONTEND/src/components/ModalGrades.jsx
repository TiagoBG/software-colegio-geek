import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getFromLocal, saveToLocal } from '../functions/localStorage';
import axios from 'axios';

export default function ModalGrades() {
    const subject = getFromLocal("subject");
    const group = getFromLocal("group");

    const registrarNotasGrupo = () => {
        const seg = document.querySelector('#input-seguimiento').value;
        const autoev = document.querySelector('#input-autoevaluacion').value;
        const coev = document.querySelector('#input-coevaluacion').value;
        const evalFinal = document.querySelector('#input-evaluacion-periodo').value;

        axios.patch(`http://localhost:8083/editar-notas/`, {
            "seguimiento": seg,
            "autoevaluacion": autoev,
            "coevaluacion": coev,
            "evaluacion_periodo": evalFinal,
            "id_estudiante": getFromLocal("id_estudiante"),
            "id_materia": getFromLocal("id_materia")
        }).then((res) => {
            console.log(res)
        })
    }
    return (<section className="my-5">
        <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
            <Card.Header closeButton>
                <Card.Title>Registrar notas {subject} de {group}</Card.Title>
            </Card.Header>
            <Card.Body>
                    <h4>Notas de {getFromLocal("nombre_estudiante")}</h4><br />
                    <p><b>OBSERVACIÓN: </b>Recuerda ingresar las notas de seguimiento separadas por comas "," (3.2, 4.5, ...) y que se deben ingresar todos los campos en un único registro.</p><br />
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Seguimiento</th>
                                <th scope="col">Autoevaluación</th>
                                <th scope="col">Coevaluación</th>
                                <th scope="col">Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" className='col' id='input-seguimiento' /></td>
                                <td><input type="text" className='col-7' id='input-autoevaluacion' /></td>
                                <td><input type="text" className='col-7' id='input-coevaluacion' /></td>
                                <td><input type="text" className='col-7' id='input-evaluacion-periodo' /></td>
                            </tr>
                        </tbody>
                    </table>
            </Card.Body>
            <div className='mx-auto'>
                    <a href="#" className='mx-4' onClick={registrarNotasGrupo}><Button variant='success' className='mt-4 px-5'><b>Guardar</b></Button></a>
                    <a href="/ver-notas" className='mx-4'><Button variant='danger' className='mt-4 px-5'><b>Regresar</b></Button></a>
            </div>
        </Card>
    </section>
    )
}