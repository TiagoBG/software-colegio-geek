import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { getFromLocal } from '../functions/localStorage';



export default function SeeReportTeacher() {
  
    const rol_inicio_s = getFromLocal('rol_inicio_s');

    if(rol_inicio_s!=='Administrador'){
    window.location.href="/";
    }

    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>Reporte final de profesores en cada grado</h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '27rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>
                        Aquí se supone que va lo que está haciendo Samuel :D
                    </h3>
                </div>
                   
                <div className="d-flex justify-content-center align-items-center">
                    <a href="/reporte-profes-grado" className='m-auto'><Button variant='info' className='mt-4 px-4'><b>Regresar</b></Button></a>
                </div>    
            </Card>
        </section>
    )
}