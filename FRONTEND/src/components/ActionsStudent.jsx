import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ActionsStudent(){

    return (
        <section>
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