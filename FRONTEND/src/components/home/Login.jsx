import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Login = () => {
  return (
    <section className="container-fluid w-100 bg-dark">
      <div className="bg-primary d-flex">
        <Image
          src="https://lh3.googleusercontent.com/proxy/NWGR-pZt6hv_64LlxDru_5MAaGjX6_Xj9jjk_XddBdHdovamWqlZ5ImdFZJ4z3wOBYNbaeLOSBGLXxTsCWYr20xO9N4-rsrbopqcmPBQiWUmtVl75_s6Ccctc9_27A-Q24x0f91RA5phXEBoaIUVivs"
          fluid          
        />
        <h4 className='p-4 mt-5 text-white'>Colegio Geek es Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero in blanditiis voluptate odit dolores alias atque facere asperiores animi placeat commodi ut ea dolor delectus enim eaque non sunt incidunt sint porro, maxime eligendi. </h4>
      </div>
      <Card
        style={{ width: "18rem" }}
        className="col-8 mx-auto mt-4 mb-5 container-fluid"
      >
        <Card.Body>
          <form action="">
            <Form.Control as="select" className="my-3">
              <option>--Selecciona tu rol--</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
            <Form.Control type="text" placeholder="Username" className="my-3" />
            <Form.Control
              type="password"
              placeholder="Password"
              className="my-3"
            />
          </form>
          <Button variant="primary" className="mt-3 mx-auto">
            Iniciar Sesión
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};
export default Login;