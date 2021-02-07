import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import swal from "sweetalert2";


import api from "../axios/axios";
import { getFromLocal } from '../functions/localStorage';

export default function TableAveragePerGroup() {
    const [infoUsuario, setInfoUsuario] = useState([]);
    
    const group = getFromLocal("group");

    const rol_inicio_s = getFromLocal('rol_inicio_s');
    if (rol_inicio_s !== 'Administrador') {
        window.location.href = "/";
    }

    useEffect(() => {
        showGroups();
        
    }, []);

    function showGroups(){
        api.get(`/reporte-prom-grupo/${group}`).then((res) => {
            if (res.status === 200) {
                setInfoUsuario(res.data);
            } else{
                swal.fire({
                    title: "Error 500", 
                    text: "Por favor reintente o vuelva después",
                    icon: "error",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#f96332"
                  });
            }
        });
    }

    return (
        <section className="container-fluid w-100">
            <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
                <div className='mx-auto mb-4'>
                    <h3 className="text-center">Promedio de notas por grupos codigo: {group}</h3>
                </div>
                <div className='mb-5 mt-4'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Seguimiento</th>
                                <th scope="col">Autoevaluación</th>
                                <th scope="col">Coevaluación</th>
                                <th scope="col">Ev periodo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {infoUsuario.map((item) => (
                                <tr key={item.codigo} className='notasXEstudiante' id={item.codigo}>
                                    <td>{item.seguimiento}</td>
                                    <td>{item.autoevaluacion}</td>
                                    <td>{item.coevaluacion}</td>
                                    <td>{item.evaluacion_periodo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <a className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Guardar</b></Button></a>
                </div>
            </Card>
        </section>
    )
}
