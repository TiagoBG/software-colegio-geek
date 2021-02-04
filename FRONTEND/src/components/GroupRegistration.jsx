import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import api from "../axios/axios";
import { saveToLocal } from '../functions/localStorage';


const GroupRegistration = () => {
  const [user, setUser] = useState(0);
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    console.log(teacherForGroup())
  });

  const teacherForGroup = () => {
    api.get(`/registro-grupo`).then(
      (res) => {
        setTeacher(res.data.rows)
      }
    );
  }

  const nextGroupStudents = () => {
    saveToLocal('director_grupo', document.querySelector('#nombre_docente').value);
    saveToLocal('jornada', document.querySelector('#jornada').value);
    saveToLocal('grado', document.querySelector('#grado').value);


  }

  return (
    <section className="container-fluid w-100">
      <Card className='mx-auto my-5 p-5' style={{ width: '40rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Grupos</h3>
        </div>
        <form className="mb-4">
          <div className="mb-0">
            <Form.Control as="select" required name="rol" id='teacherSelection' className="shadow-lg my-3">
              <option>---Selecciona el director de grupo---</option>
              {teacher.map((item) =>
                <option key={item.id}>{item.id}-{item.nombre_completo}</option>
              )};
                    </Form.Control>
            <Form.Control as="select" className="my-3" id="jornada" >
              <option>Jornada</option>
              <option>Mañana</option>
              <option>Tarde</option>
            </Form.Control>
            <Form.Control as="select" className="my-3" id="grupo" >
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
        <a className='m-auto'><Button variant='success' className='mt-4 px-5'><b>Guardar</b></Button></a>
          </div>
      </Card>
    </section>
  );
};
export default GroupRegistration;




