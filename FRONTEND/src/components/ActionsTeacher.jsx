import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { getFromLocal } from '../functions/localStorage';
import Form from 'react-bootstrap/Form';
import {saveToLocal} from "../functions/localStorage";


export default function ActionsTeacher() {
    const nombre_completo = getFromLocal('nombre_completo');
    const [materia, setMateria] = useState([]);
    let hash ={};

    function obtenerMateriasDocente() {
        const id = getFromLocal("id");
        if (id) {
            axios.get(`http://localhost:8083/docente/${id}`).then(
                (res) => {
                    setMateria(res.data.rows.filter(o => hash[o.id] ? false : hash[o.id] = true))
                }
            );
        }
    } 

    const verNotas = ()=>{
        const choice = document.querySelector('#teacherSelection').value
        const g = choice.split('-');        
        saveToLocal('subject', g[0]);
        saveToLocal('group', g[1]);
        console.log(choice);
    }    
    
    /* var hash = {};
        set = materia.filter(function (current) {
        var exists = !hash[current.nombre];
        hash[current.nombre] = true;
        return exists;
    });
    setMateria(set); */
    console.log(materia);

    return (
        <section className="container-fluid w-100" onLoad={obtenerMateriasDocente}>
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>
                    Sección para docentes
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Estimado Docente</h3>
                    <h4>{nombre_completo}</h4>
                </div>
                <Form>
                    <Form.Control as="select" required name="rol" id='teacherSelection' className="shadow-lg my-3" onClick={obtenerMateriasDocente}>
                        <option>---Selecciona el grupo---</option>
                         {materia.map((item, i) =>
                            <option key={item.id}>{item.nombre}-{item.codigo}</option>
                        )};
                    </Form.Control>                    
                </Form>
                <a href="/ver-notas/" className='m-auto' onClick={verNotas}><Button variant='info' className='mt-4 px-5 action-button'><b>Ver</b></Button></a>

                <a href="/" className='m-auto'><Button variant='danger' className='mt-4 px-5 action-button'><b>Cerrar Sesión</b></Button></a>
            </Card>
        </section>
    )
}