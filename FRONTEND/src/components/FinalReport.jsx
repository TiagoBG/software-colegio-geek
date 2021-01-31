import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";


export default function FinalReport() {
    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>Reporte final</h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <h3 className="text-center"> Generar reporte final</h3>
                <Form.Control as="select" className="my-3" id="registroRol" >
                    <option>Seleccionar grado y grupo</option>
                    <option>6</option>
                </Form.Control>
                <Form.Control as="select" className="my-3" id="registroRol" >
                    <option>Tipo del archivo</option>
                    <option>PDF</option>
                    <option>Excel</option>
                </Form.Control>
                <a href="/user-registration/" className='m-auto px-5'><Button variant='info' className='mt-4 action-button'><b>Ver reporte final</b></Button></a>
            </Card>
        </section>
    )
}