import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { getFromLocal } from '../functions/localStorage';

export default function ReportStudentGrade() {
    const rol_inicio_s = getFromLocal('rol_inicio_s');
    if(rol_inicio_s!=='Administrador'){
    window.location.href="/";
    }
    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>Sección para ver la cantidad de estudiantes según el grado y la materia</h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '27rem' }}>
            <div className='mx-auto text-center mb-4'>
                    <h3>
                        Escoja una grado y una materia
                    </h3>
                </div>
                <Form className="mb-4">
                    <div className="mb-0">
                        <Form.Control as="select" required name="rol" id='grado' className="shadow-lg my-3">
                            <option>Grado</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                        </Form.Control>
                        <Form.Control as="select" required name="rol" id='materia' className="shadow-lg my-3">
                            <option>Materia</option>
                        </Form.Control>
                    </div>
                </Form>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="/reporte-final" className='m-auto'><Button variant='info' className='mt-4 px-4'><b>Regresar</b></Button></a>
                    <a className='m-auto' ><Button variant='success' className='mt-4 px-4' ><b>Visualizar</b></Button></a>
                </div>
            </Card>
        </section>
    )
}