import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import api from "../axios/axios";


const GroupRegistration = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {

  });
  const teacherForGroup = () => {

  }

  const clearFields = () => {
    const userName = document.querySelector('#nombre_docente');
    const groupJornada = document.querySelector('#jornada');
    const groupGrade = document.querySelector('#grado');
    const userInputs = [userName, groupJornada, groupGrade]
    for (const input of userInputs) {
      input.value = '';
    }
    alert('Los campos serán eliminados');
    setUser(0);
  }
  return (
    <section className="container-fluid w-100">
      <Card className='mx-auto my-5 p-5' style={{ width: '40rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Grupos</h3>
        </div>
        <form className="mb-4">
          <div className="mb-0">
            <Form.Control as="select" className="my-3" id="nombre_docente" >
              <option>Docente</option>
              <option></option>
              <option></option>
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
          <a href="#" className='m-auto'><Button variant='success' className='mt-4 px-5'><b>Guardar</b></Button></a>
          <a href="#" className='m-auto'><Button variant='danger' className='mt-4 px-5' onClick={clearFields}><b>Cancelar</b></Button></a>
        </div>
      </Card>
    </section>
  );
};
export default GroupRegistration;




