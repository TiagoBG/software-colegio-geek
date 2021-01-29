import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ActionsStudent(){

    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white'>
                Recuerda que podrás dar seguimiento a tus calificaciones en la sección de "Seguimiento" y consultar las tareas y actividades de cada materia en la sección de "Actividades".
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '18rem' }}>
                <div className='mx-auto'>
                    <h3>Estimado Estudiante</h3>
                    <h4>_____ - _____</h4>
                </div>
                <Button variant='info' className='mt-4'><b>Seguimiento</b></Button>
                <Button variant='info' className='mt-4'><b>Actividades</b></Button>
                <Button variant='danger' className='mt-4'><b>Cerrar Sesión</b></Button>
            </Card>        
        </section>
    )
}