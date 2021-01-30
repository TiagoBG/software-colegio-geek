import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert2";
import {saveToLocal} from "../functions/localStorage";


const Login = () => {
  const [loginData, setLoginData] = useState({});
  function updateLoginData(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  const iniciarSesion = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8083/", {
        correo: loginData.correo,
        contrasena: loginData.contrasena,
        rol: loginData.rol
      })
      .then((res) => {
        if (res.data.message === "Info incorrecta") {
          swal.fire({
            title: "Correo y/o contraseña incorrectos",
            text: "Por favor intenta otra vez",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332"
          });
          console.log(res.data);
        } else {
          console.log(res.data);
          const id =res.data.resulset.rows[0]['id'];
          const nombre=res.data.resulset.rows[0]['nombre_completo'];
          saveToLocal('id', id);
          saveToLocal('nombre_completo', nombre);
          if(loginData.rol==="Estudiante"){
            window.location.href="/estudiante";
          }
        }
      });
  };

  return (
    <section  className="container-fluid w-100">
      <div className="container d-flex container_intro_home mb-5">
        <h4 className='intro_home mt-2 text-white'>
          Bienvenido a la plataforma académica de Colegio Geek, en esta plataforma
          se encuentran diferentes servicios para la comunidad educativa y dependiendo de su rol en la institución, 
          podrán acceder a ellos.
        </h4>
      </div>
      
      <Card
        style={{ width: "25rem" }}
        className="col-8 mx-auto mt-2 mb-5 container-fluid"
      >
        <Card.Title className='mt-3 mx-auto'>Inicia tu sesión</Card.Title>
        <Card.Body>
          <Form>
            <Form.Control as="select" required name="rol" onChange={updateLoginData} className="shadow-lg my-3">
              <option>---Selecciona tu rol---</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
            <Form.Control 
              required
              name="correo" 
              type="text" 
              placeholder="Correo" 
              className="shadow-lg my-3" 
              onChange={updateLoginData}/>
            <Form.Control
              required
              name="contrasena"
              type="password"
              placeholder="Contraseña"
              className="shadow-lg my-3"
              onChange={updateLoginData}/>
          </Form>
          <div className="mx-auto d-flex">
          <Button variant="primary" className="shadow-lg mt-4 mx-auto" onClick={iniciarSesion}>
            Iniciar Sesión
          </Button>
          <Button variant="danger" className="shadow-lg mt-4 mx-auto" onClick={window.close}>
            Salir
          </Button>
          </div>
          
        </Card.Body>
      </Card>
    </section>
  );
};
export default Login;