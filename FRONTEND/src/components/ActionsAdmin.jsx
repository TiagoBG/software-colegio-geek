import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {getFromLocal} from '../functions/localStorage';

export default function ActionsAdmin(){
  const nombre_completo=getFromLocal('nombre_completo');
    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>Sección del Admin</h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Estimado Admin</h3>
                    <h4>{nombre_completo}</h4>
                </div>
                <a href="/user-registration/" className='m-auto px-5'><Button variant='info' className='mt-4 action-button'><b>Registrar usuarios</b></Button></a>
                <a href="/materias-registration/" className='m-auto'><Button variant='info' className='mt-4 action-button'><b>Registrar materias</b></Button></a>
                <a href="/report/" className='m-auto px-5'><Button variant='info' className='mt-4 action-button'><b>Generar Reporte</b></Button></a>
                <a href="/" className='m-auto'><Button variant='danger' className='mt-4 action-button'><b>Cerrar Sesión</b></Button></a>
            </Card>        
        </section>
    )
}