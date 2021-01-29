import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert2";


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
    axios.post("https://altovoltaje.herokuapp.com/iniciar-sesion", {
        correo: loginData.correo,
        contrasena: loginData.contrasena
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Info incorrecta") {
          swal.fire({
            title: "Correo y/o contraseña incorrectos",
            text: "Por favor intenta otra vez",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            //confirmButtonText: "Por favor prueba otra vez",
            confirmButtonColor: "#f96332"
          });
        } else {
          const { Id_usuario } = res.data.rows[0];
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
          <form>
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
          </form>
          <Button variant="primary" className="shadow-lg mt-3 mx-auto" onClick={iniciarSesion}>
            Iniciar Sesión
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};
export default Login;