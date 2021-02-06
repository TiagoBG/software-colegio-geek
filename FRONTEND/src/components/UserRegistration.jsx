import React, { useState, useEffect } from "react";
import api from "../axios/axios";
import swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getFromLocal } from '../functions/localStorage';


const UserRegistration = () => {
  const rol_inicio_s = getFromLocal('rol_inicio_s');
  if(rol_inicio_s!=='Admistrador'){
    window.location.href="/";
  }
  const [userData, setUserData] = useState({});
  useEffect(() => {
  });
  function insertUser(e) {
    let name = e.target.id;
    let value = e.target.value;
    setUserData(state=>({
      ...userData,
      [name]: value
    }));
    console.log(userData)
  }
  const insertarUsuario = (event) => {
    event.preventDefault();

      const data = {
        documento: userData.documento,
        nombre_completo: userData.nombre_completo,
        contrasena: userData.contrasena,
        correo: userData.correo,
        rol: userData.rol,
        estado: "Activo"
      }


      api.post('/register_user',data).then((res) => {
        if (res.data.state ===0) {
          swal.fire({
            title: "Error 500",
            text: "Por favor reintente o vuelva después",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332"
          });
          console.log(res.data);
        } else {
          swal.fire({
            title: "Usuario creado correctamente",
            icon: "success",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#54e346"
          });

          api.post('/sendEmail',data).then((res)=>{
            if(res.state === 0){
              alert('No se pudo enviar la confimación de credenciales al correo proporcionado');
            }
            clearFields();
          }); 
        }
      });
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

    userRole.value = 'Rol';
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
        
        <div className="d-flex justify-content-center align-items-center">
          <a href="/admin" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Regresar</b></Button></a>
          <a className='m-auto'><Button variant='success' className='mt-4 px-5' onClick={insertarUsuario}><b>Guardar</b></Button></a>
        </div>
      </Card>
    </section>
  );
};
export default UserRegistration;