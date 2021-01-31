import React, { useState, useEffect } from "react";
import StudentRegistration from '../components/StudentRegistration';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const UserRegistration = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {});
  function renderRol(e) {
    let value = e.target.value;
    console.log(value);
    if (value === "Estudiante") {
      setUser(1);
    } else {
      setUser(0);
    }
  }

 const clearFields = () => {

    const userName = document.querySelector('#nombre_completo');
    const userDocument = document.querySelector('#documento');
    const userEmail = document.querySelector('#email');
    const userPassword = document.querySelector('#password');
    const userRole = document.querySelector('#registroRol');
   

    const userInputs = [userName, userDocument, userEmail, userPassword, userRole]

    for (const input of userInputs) {
        input.value = ''
    }
    alert('Los campos serán eliminados');
    setUser(0);
}

  return (
    <section className="container-fluid w-100">
      <Card className='mx-auto my-5 p-5' style={{ width: '40rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Usuarios</h3>
        </div>
        <form className="mb-4">
          <div className="mb-0">
            <input
              type="email"
              className="form-control my-3"
              id="nombre_completo"
              aria-describedby="emailHelp"
              placeholder="Nombre Completo"

            />
            <input
              type="text"
              className="form-control my-3"
              id="documento"
              placeholder="Documento de identidad"
            />
            <input
              type="email"
              className="form-control my-3"
              id="email"
              placeholder="Correo"
            />
            <input
              type="password"
              className="form-control my-3"
              id="password"
              placeholder="Contraseña"
            />
            <Form.Control as="select" className="my-3" id="registroRol" onChange={renderRol}>
              <option>Rol</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
          </div>
        </form>
        {user === 1 && <StudentRegistration width='100%'/>}
        <div className="d-flex justify-content-center align-items-center">
        
        <a href="/admin" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Regresar</b></Button></a>
        <a href="#" className='m-auto'><Button variant='success' className='mt-4 px-5'><b>Guardar</b></Button></a>
        <a href="#" className='m-auto'><Button variant='danger' className='mt-4 px-5' onClick={clearFields}><b>Cancelar</b></Button></a>

          </div>
      </Card>
    </section>
  );
};
export default UserRegistration;



