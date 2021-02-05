import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import api from "../axios/axios";
import { saveToLocal } from '../functions/localStorage';


const GroupRegistration = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    teacherForGroup()
  },[]);

  const teacherForGroup = () => {
    api.get(`/registro-grupo`).then(
      (res) => {
        setTeacher(res.data.rows)
        console.log(res.data.rows);
      }
    );
  }

  const nextGroupStudents = () => {
    const director_grupo = document.querySelector('#nombre_docente').value;
    const jornada = document.querySelector('#jornada').value;
    const grado = document.querySelector('#grado').value;
    saveToLocal('nombre_docente', director_grupo);
    saveToLocal('jornada', jornada );
    saveToLocal('grado', grado);
    console.log("jejejeje");
  }

  return (
    <section className="container-fluid w-100">
      <Card className='mx-auto my-5 p-5' style={{ width: '40rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Grupos</h3>
        </div>
        <form className="mb-4">
          <div className="mb-0">
            <Form.Control as="select" required name="rol" id='nombre_docente' className="shadow-lg my-3">
              <option>---Selecciona el director de grupo---</option>
              {teacher.map((item) =>
                <option key={item.id}>{item.nombre_completo}</option>
              )};
                    </Form.Control>
            <Form.Control as="select" className="my-3" id="jornada" >
              <option>Jornada</option>
              <option>Mañana</option>
              <option>Tarde</option>
            </Form.Control>
            <Form.Control as="select" className="my-3" id="grado" >
              <option>Grado</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
            </Form.Control>
          </div>
        </form>
        <div className="d-flex justify-content-center align-items-center">
        <a href="/admin" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Regresar</b></Button></a>
        <a href="/registro-grupo-estudiantes" className='m-auto'onClick ={nextGroupStudents}><Button variant='success' className='mt-4 px-5'><b>Siguiente</b></Button></a>
          </div>
      </Card>
    </section>
  );
};
export default GroupRegistration;




