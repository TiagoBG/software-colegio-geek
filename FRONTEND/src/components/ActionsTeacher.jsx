import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {getFromLocal} from '../functions/localStorage';

export default function ActionsStudent(){
    const [infoUsuario, setInfoUsuario] = useState({});

    useEffect(() => {
        obtenerInfoUsuario();
    }, []);

    function obtenerInfoUsuario() {
        const id = getFromLocal("id");
        if (id) {
          axios.get(`http://localhost:8083/docente/${id}`).then(
            (response) => {
              console.log(response.data[0]);
              let info = response.data[0];
              setInfoUsuario(info);
            }
          );
        }
      }
    
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
                    <h4>{infoUsuario.nombre_completo}</h4>
                </div>
                <Form>
                    <Form.Control as="select" required name="rol" onChange={updateLoginData} className="shadow-lg my-3">
                        <option>---Selecciona el grupo---</option>
                        {/* ACÁ VA UN MAP DE LOS GRUPOS QUE VEN ESTA MATERIA */}
                        <option>Estudiante</option>
                        
                    </Form.Control>
                </Form>
                <div className="d-flex">
                    <a href="/seguimiento/" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Ver</b></Button></a>
                    <a href="/actividades/" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Editar</b></Button></a>
                </div>                
                <a href="/" className='m-auto'><Button variant='danger' className='mt-4 px-5'><b>Cerrar Sesión</b></Button></a>
            </Card>        
        </section>
    )
}