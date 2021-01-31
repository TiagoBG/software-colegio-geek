import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getFromLocal} from '../functions/localStorage';

export default function ActionsAdmin(){
  const nombre_completo=getFromLocal('nombre_completo');
    return (
        <section className="container-fluid w-100">
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white'>
                Acceder al perfil....
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '30rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Estimado Administrador</h3>
                    <h4>{nombre_completo}</h4>
                </div>
                <a href="/UserRegistration/" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Registrar usuarios</b></Button></a>
                <a href="//" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Registrar materia</b></Button></a>
                <a href="/actividades/" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Registrar grupo</b></Button></a>
                <a href="/" className='m-auto'><Button variant='danger' className='mt-4 px-5'><b>Cerrar Sesión</b></Button></a>
            </Card>        
        </section>
    )
}