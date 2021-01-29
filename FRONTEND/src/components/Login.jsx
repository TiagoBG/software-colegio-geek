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
        contrasena: loginData.contrasena
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
        } else {
          console.log(res.data.resulset[0]);
          const id =res.data.resulset[0]['id'];
          console.log(id);
          saveToLocal('id', id);
          window.location.href="/estudiante";
        }
      });
  };

  return (
    <section  className="container-fluid w-100">
      <div className="container d-flex container_intro_home">
        <h4 className='intro_home mt-2 text-white'>
          Bienvenido a la plataforma académica de Colegio Geek, en esta plataforma
          se encuentran diferentes servicios para la comunidad educativa y dependiendo de su rol en la institución, 
          podrán acceder a ellos.
        </h4>
      </div>
      <br/>
      <br/>
      <br/>
      <Card
        style={{ width: "18rem" }}
        className="col-8 mx-auto mt-2 mb-5 container-fluid"
      >
        <Card.Body>
          <Form>
            <Form.Control as="select" className="shadow-lg my-3">
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
          <Button variant="primary" className="shadow-lg mt-3 mx-auto" onClick={iniciarSesion}>
            Iniciar Sesión
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};
export default Login;