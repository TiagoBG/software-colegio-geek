import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from '../axios/axios';
import api from "../axios/axios";


const AveragePerGroup = () => {

    const getStudetForReport = () => {
        const documento_estudiante = document.querySelector('#documento-estudiante').value;
        
        
    }

    return(
        <section  className="container-fluid w-100" >
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>
                    Reporte de calificaciones por grupo
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Selecciona el grupo a buscar</h3>
                </div>
                <Form.Control as="select" required name="grupo" id='materia' className="shadow-lg my-3">
                            <option>Grupo</option>
                            {/* {grupo.map((item)=><option key={item.id}>{item.codigo}</option>)} */}
                </Form.Control>
                <a href="/ver-notas" className='m-auto'><Button variant='info' className='mt-4 px-5 action-button'><b>Ver Reporte</b></Button></a>

                <a href="/reporte-final" className='m-auto'><Button variant='danger' className='mt-4 px-5 action-button'><b>Regresar</b></Button></a>
            </Card>
        </section>
    )
}

export default AveragePerGroup