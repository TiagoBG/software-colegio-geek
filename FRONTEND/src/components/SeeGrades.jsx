import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {getFromLocal} from '../functions/localStorage';

export default function FollowUp() {
    const [infoUsuario, setInfoUsuario] = useState([]);
    const subject = getFromLocal("subject");
    const group = getFromLocal("group");

    useEffect(() => {
        obtenerMateriasUsuario();
    }, []);

      function obtenerMateriasUsuario() {
        const id = getFromLocal("id");
        if (id) {
          axios.get(`http://localhost:8083/ver-notas/`).then(
            (res) => {
              setInfoUsuario(res.data);
            }
          );
        }
        console.log(infoUsuario)
      }
    return (
        <section className="container-fluid w-100">
            <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
                <div className='mx-auto mb-4'>
                    <h3 className="text-center">Notas {subject} de {group}</h3>                    
                </div>
                <div className='mx-auto'>
                <a href="/admin" className='mx-4'><Button variant='info' className='mt-4 px-5'><b>Editar</b></Button></a>
                <a href="#" className='mx-4'><Button variant='success' className='mt-4 px-5'><b>Guardar</b></Button></a>
                <a href="/docente" className='mx-4'><Button variant='danger' className='mt-4 px-5'><b>Regresar</b></Button></a>
                </div>
                <div className='mb-5 mt-4'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Estudiante</th>
                                <th scope="col">Seguimiento</th>
                                <th scope="col">Autoevaluación</th>
                                <th scope="col">Coevaluación</th>
                                <th scope="col">Final</th>
                                <th scope="col">Promedio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {infoUsuario.map((info)=>(
                                <tr key={info.id}>
                                    <td>{info.id}</td>
                                    <td>{info.nombre}</td>
                                    <td>{info.seguimiento}</td>
                                    <td><input type='text'>{info.autoevaluacion}</input></td>
                                    <td>{info.coevaluacion}</td>
                                    <td>{info.evaluacion_periodo}</td>
                                    <td>{(info.autoevaluacion+info.coevaluacion+info.evaluacion_periodo)/3}</td>
                                </tr>
                                ))}                      
                        </tbody>
                    </table>
                </div>                
            </Card>
        </section>
    )

}