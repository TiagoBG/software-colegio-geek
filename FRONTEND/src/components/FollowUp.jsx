import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {getFromLocal} from '../functions/localStorage';

export default function FollowUp() {
    const [infoUsuario, setInfoUsuario] = useState([]);
    useEffect(() => {
        obtenerMateriasUsuario();
    }, []);
    const nombre_completo=getFromLocal('nombre_completo');
    function obtenerMateriasUsuario() {
        const id = getFromLocal("id");
        if (id) {
          axios.get(`http://localhost:8083/seguimiento/${id}`).then(
            (res) => {
              setInfoUsuario(res.data);
            }
          );
        }
      }
      
    return (
        <section className="container-fluid w-100">
            <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
                <div className='mx-auto mb-4'>
                    <h3 className="text-center">Seguimiento</h3>
                    <h4 className="text-center">{nombre_completo}</h4>
                </div>
                <div className='mb-5 mt-4'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Materia</th>
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
                                    <td>{info.autoevaluacion}</td>
                                    <td>{info.coevaluacion}</td>
                                    <td>{info.evaluacion_periodo}</td>
                                    <td>{(info.autoevaluacion+info.coevaluacion+info.evaluacion_periodo)/3}</td>
                                </tr>
                                ))}
                            
                        </tbody>
                    </table>
                </div>
                <a href="/estudiante" className='m-auto'><Button variant='danger' className='mt-4 px-5'><b>Regresar</b></Button></a>
            </Card>
        </section>
    )

}