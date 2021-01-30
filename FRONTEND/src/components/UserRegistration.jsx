import React from "react";
import Form from "react-bootstrap/Form";

const UserRegistration = () => {
  return (
    <section className="container-fluid w-100">
      <h1 className="mt-4 mb-4">Registro Usuarios</h1>
      <form>
        <div className="mb-3">
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
        <button type="submit" className="btn btn-danger">
          Calcelar
        </button>
        <button type="submit" className="btn btn-success mx-5 my-3">
          Guardar
        </button>
      </form>
    </section>
  );
};
export default UserRegistration;
