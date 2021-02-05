import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import api from "../axios/axios";
import { getFromLocal, saveToLocal } from '../functions/localStorage';

export default function AssigningGroupStudent() {
    const [infoUsuario, setInfoUsuario] = useState([]);
    const [grupo, setGrupo]=useState([]);
    const grado = getFromLocal("grado");
    const id_director_grupo = getFromLocal("id_director_grupo");
    useEffect(() => {
        showStudentGrade();
    }, []);

    function showStudentGrade() {
        if (grado) {
            api.post(`/grupo-estudiantes`, {'grado': grado}).then(
                (res) => {
                    setInfoUsuario(res.data.rows);
                }
            );
        }
    }

    return (
        <section className="container-fluid w-100">
            <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
                <div className='mx-auto mb-4'>
                    <h3 className="text-center">Estudiantes registrados para el grado {grado}</h3>
                </div>
                <div className='mx-auto'>
                    <a href="/registro-grupo" className='mx-4'><Button variant='danger' className='mt-4 px-5'><b>Regresar</b></Button></a>
                </div>
                <div className='mb-5 mt-4'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">Estudiante</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {infoUsuario.map((item) => (
                                <tr key={item.codigo} className='notasXEstudiante' id={item.codigo}>
                                    <td id={item.codigo}>{item.codigo}</td>
                                    <td>{item.nombre_completo}</td>
                                    <td><Button className='btn btn-info' onClick={() => {
                                        saveToLocal("id_estudiante", item.id);
                                        }
                                    }>Añadir</Button></td>
                                    {/* <td><input id={item.codigo} type="checkbox" onChange={()=>{
                                        console.log(`${item.codigo}`);
                                        const check=document.getElementById(item.codigo);
                                        if(check.checked){
                                            console.log('on'+item.codigo)
                                            console.log(check.checked)
                                        }else{
                                            console.log('ofF'+item.codigo)
                                            console.log(check.checked)
                                        }
                                        
                                    }}/></td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </section>
    )
}