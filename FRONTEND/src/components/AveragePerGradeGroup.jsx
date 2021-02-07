import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from '../axios/axios';
import api from "../axios/axios";


const AveragePerGradeGroup = () => {
    const [infoUsuario, setInfoUsuario] = useState([]);

    const getGradesPerGradeGroup = () => {
        const grado = document.querySelector('#grado').value;
        if (grado) {
            api.get(`seguimiento/${grado}`).then(
            (res) => {
              setInfoUsuario(res.data.rows);
              console.log(res.data.rows);
            }
            );
        }
        console.log(grado)
    }

    return(
        <section  className="container-fluid w-100" >
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>
                    Reporte de calificaciones por grado
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Selecciona el grado a buscar</h3>
                </div>
                <Form.Control as="select" required name="grado" id='grado' className="shadow-lg my-3" onChange={getGradesPerGradeGroup}>
                            <option>Grado</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                </Form.Control>

                <a href="/ver-notas" className='m-auto'><Button variant='info' className='mt-4 px-5 action-button'><b>Ver Reporte</b></Button></a>

                <a href="/reporte-final" className='m-auto'><Button variant='danger' className='mt-4 px-5 action-button'><b>Regresar</b></Button></a>
            </Card>
        </section>
    )
}

export default AveragePerGradeGroup