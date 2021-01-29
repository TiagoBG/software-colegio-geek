import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Login = () => {
  return (
    <section  className="container-fluid w-100">
      <div className="container d-flex container_intro_home">
        <h4 className='intro_home mt-2 text-white'>
          Bienvenido a la plataforma académica de Colegio Geek, en esta plataforma
          se encuentra diferentes servicios para la comunidad educativa y dependiendo de su rol en la institución, 
          podrá acceder a ellos.
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
          <form action="">
            <Form.Control as="select" className="shadow-lg my-3">
              <option>---Selecciona tu rol---</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
            <Form.Control type="text" placeholder="Correo" className="shadow-lg my-3" />
            <Form.Control
              type="password"
              placeholder="Contraseña"
              className="shadow-lg my-3"
            />
          </form>
          <Button variant="primary" className="shadow-lg mt-3 mx-auto">
            Iniciar Sesión
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};
export default Login;