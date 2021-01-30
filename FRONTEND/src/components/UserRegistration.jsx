import React from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

const UserRegistration = () => {
  return (
    <section className="container-fluid w-100">

      <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Usuarios</h3>
        </div>
        <form className = "mb-4">
          <div className="mb-0">
            <input
              type="email"
              className="form-control my-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nombre Completo"
            />
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Documento de identidad"
            />
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Correo"
            />
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Contraseña"
            />
            <Form.Control as="select" className="my-3">
              <option>Rol</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-danger mx-1 ">
              Cancelar
        </button>
            <button type="submit" className="btn btn-success mx-1">
              Guardar
        </button>
          </div>
        </form>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Registro estudiantes
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <form className = "mb-4">
          <div className="mb-0">
            <input
              type="email"
              className="form-control my-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nombre Completo"
            />
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Documento de identidad"
            />
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Correo"
            />
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Contraseña"
            />
            <Form.Control as="select" className="my-3">
              <option>Rol</option>
              <option>Estudiante</option>
              <option>Docente</option>
              <option>Administrador</option>
            </Form.Control>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-danger mx-1 ">
              Cancelar
        </button>
            <button type="submit" className="btn btn-success mx-1">
              Guardar
        </button>
          </div>
        </form>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </Card>


    </section>
  );
};
export default UserRegistration;



