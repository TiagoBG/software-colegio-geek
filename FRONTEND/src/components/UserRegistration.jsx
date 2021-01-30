import React, { useState, useEffect } from "react";
import StudentRegistration from '../components/StudentRegistration';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';

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
          <button type="submit" className="btn btn-danger mx-1 ">
            Cancelar
        </button>
          <button type="submit" className="btn btn-success mx-1">
            Guardar
        </button>
        </div>
      </Card>
    </section>
  );
};
export default UserRegistration;



