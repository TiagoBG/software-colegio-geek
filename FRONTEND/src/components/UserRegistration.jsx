import React, { useState, useEffect } from "react";
import api from "../axios/axios";
import swal from "sweetalert2";

import StudentRegistration from '../components/StudentRegistration';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';



const UserRegistration = () => {
  const [user, setUser] = useState(0);
  const [userData, setUserData] = useState({});
  useEffect(() => {

  });
  function insertUser(e) {
    let name = e.target.id;
    let value = e.target.value;
    console.log(value);
    if (value === "Estudiante") {
      setUser(1);
      setUserData({
        ...userData,
        [name]: value
      });
    } else {
      setUser(0);
      setUserData({
        ...userData,
        [name]: value
      });
      console.log(userData);
    }
  }
  const insertarUsuario = (event) => {
    event.preventDefault();
    if (user === 0) {
      api.post('/register_user', {
        nombre_completo: userData.nombre_completo,
        documento: userData.documento,
        correo: userData.correo,
        contrasena: userData.contrasena,
        rol: userData.rol,
        estado: "Activo"
      }).then((res) => {
        if (res.data.message === "Bad") {
          swal.fire({
            title: "Error 500",
            text: "Por favor reintente o vuelva después",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332"
          });
          console.log(res.data);
        } else {
          console.log(res.data);
          swal.fire({
            title: "Usuario creado correctamente",
            icon: "success",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#54e346"
          });
          clearFields();
        }
      });
    } else {
      api.post('/register_student', {
        nombre_completo: userData.nombre_completo,
        documento: userData.documento,
        correo: userData.correo,
        contrasena: userData.contrasena,
        rol: userData.rol,
        estado: "Activo",
        tipo_documeto: userData.tipo_documeto,
        sexo: userData.sexo,
        fecha_nacimiento: userData.fecha_nacimiento,
        direccion: userData.direccion,
        ciudad: userData.ciudad,
        telefono: userData.telefono,
        celular: userData.celular,
        grado: userData.grado
      }).then((res) => {
        if (res.data.message === "Bad") {
          swal.fire({
            title: "Error 500",
            text: "Por favor reintente o vuelva después",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332"
          });
          console.log(res.data);
        } else {
          console.log(res.data);
          swal.fire({
            title: "Usuario creado correctamente",
            icon: "success",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#54e346"
          });
          clearFields();
        }
      });

    }
  }



  const clearFields = () => {
    const userName = document.querySelector('#nombre_completo');
    const userDocument = document.querySelector('#documento');
    const userEmail = document.querySelector('#correo');
    const userPassword = document.querySelector('#contrasena');
    const userRole = document.querySelector('#rol');

    const userInputs = [userName, userDocument, userEmail, userPassword, userRole]

    for (const input of userInputs) {
      input.value = ''
    }
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
            <Form.Control as="select" className="my-3" id="rol" onChange={insertUser}>
              <option>Rol</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
            <input
              type="email"
              className="form-control my-3"
              id="nombre_completo"
              aria-describedby="emailHelp"
              placeholder="Nombre Completo"
              onChange={insertUser}
            />
            <input
              type="text"
              className="form-control my-3"
              id="documento"
              placeholder="Documento de identidad"
              onChange={insertUser}
            />
            <input
              type="email"
              className="form-control my-3"
              id="correo"
              placeholder="Correo"
              onChange={insertUser}
            />
            <input
              type="password"
              className="form-control my-3"
              id="contrasena"
              placeholder="Contraseña"
              onChange={insertUser}
            />
          </div>
        </form>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Registroestudiantes
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <form className="mb-4">
                <div className="mb-0">
                  <Form.Control as="select" className="my-3" id="tipo_documento" onChange={insertUser}>
                    <option>Tipo de documento</option>
                    <option>TI</option>
                    <option>CC</option>
                    <option>NUIP</option>
                  </Form.Control>
                  <Form.Control as="select" className="my-3" id="sexo" onChange={insertUser}>
                    <option>Sexo</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                    <option>Otro</option>
                  </Form.Control>
                  <input
                    type="text"
                    className="form-control my-3"
                    id="exampleInputPassword1"
                    placeholder="Fecha de nacimiento"
                    id="fecha_nacimiento"
                    onChange={insertUser}
                  />
                  <input
                    type="text"
                    className="form-control my-3"
                    id="exampleInputPassword1"
                    placeholder="Direccion"
                    id="direccion"
                    onChange={insertUser}
                  />
                  <input
                    type="text"
                    className="form-control my-3"
                    id="exampleInputPassword1"
                    placeholder="Ciudad"
                    id="ciudad"
                    onChange={insertUser}
                  />
                  <input
                    type="text"
                    className="form-control my-3"
                    id="exampleInputPassword1"
                    placeholder="Telefono"
                    id="telefono"
                    onChange={insertUser}
                  />
                  <input
                    type="text"
                    className="form-control my-3"
                    id="exampleInputPassword1"
                    placeholder="Celular"
                    id="celular"
                    onChange={insertUser}
                  />
                  <Form.Control as="select" className="my-3" id="grado"
                    onChange={insertUser}>
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
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div className="d-flex justify-content-center align-items-center">
          <a href="/admin" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Regresar</b></Button></a>
          <a href="#" className='m-auto'><Button variant='success' className='mt-4 px-5' onClick={insertarUsuario}><b>Guardar</b></Button></a>
          <a href="#" className='m-auto'><Button variant='danger' className='mt-4 px-5' onClick={clearFields}><b>Cancelar</b></Button></a>
        </div>
      </Card>
    </section>
  );
};
export default UserRegistration;