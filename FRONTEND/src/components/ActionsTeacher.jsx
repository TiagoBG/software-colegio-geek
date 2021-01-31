import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {getFromLocal} from '../functions/localStorage';
import Form from 'react-bootstrap/Form';

export default function ActionsTeacher(){
    const nombre_completo=getFromLocal('nombre_completo');
    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white'>
                Sección para docentes.
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Estimado Docente</h3>
                    <h4>{nombre_completo}</h4>
                </div>
                <Form>
                    <Form.Control as="select" required name="rol" className="shadow-lg my-3">
                        <option>---Selecciona el grupo---</option>
                        {/* ACÁ VA UN MAP DE LOS GRUPOS QUE VEN ESTA MATERIA */}
                        <option>6A</option>
                        
                    </Form.Control>
                </Form>              
                <a href="/ver-notas/" className='m-auto'><Button variant='info' className='mt-4 px-5 action-button'><b>Ver</b></Button></a>           
                               
                <a href="/" className='m-auto'><Button variant='danger' className='mt-4 px-5 action-button'><b>Cerrar Sesión</b></Button></a>
            </Card>        
        </section>
    )
}