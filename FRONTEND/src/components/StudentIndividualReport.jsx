import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from '../axios/axios';
import api from "../axios/axios";


const StudentIndividualReport = () => {

    const getStudetForReport = () => {
        const documento_estudiante = document.querySelector('#documento-estudiante').value;
        api.get(`/reporte-estudiante/${id}`).then(
            
        )
        
    }

    return(
        <section  className="container-fluid w-100" >
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>
                    Reporte de calificaciones por estudiante
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Ingresa el documento del estudiante</h3>
                </div>
                <Form>
                    
                    <Form.Control type="text" placeholder="Documento" required name="documento-estudiante" id='documento-estudiante' className="shadow-lg my-3"/>
                       
                </Form>
                <a href="/ver-notas" className='m-auto'><Button variant='info' className='mt-4 px-5 action-button'><b>Ver Reporte</b></Button></a>

                <a href="/reporte-final" className='m-auto'><Button variant='danger' className='mt-4 px-5 action-button'><b>Regresar</b></Button></a>
            </Card>
        </section>
    )
}

export default StudentIndividualReport