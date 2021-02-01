import React, { useState, useEffect } from "react";
import api from "../axios/axios";
import swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const StudentRegistration = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {});
  function insertUser(e) {
    let name = e.target.id;
    let value = e.target.value;
    setUserData((state) => ({
      ...userData,
      [name]: value,
    }));
    console.log(userData);
  }

  const insertarUsuario = (event) => {
    event.preventDefault();

    api
      .post("/register_student", {
        documento: userData.documento,
        nombre_completo: userData.nombre_completo,
        contrasena: userData.contrasena,
        correo: userData.correo,
        rol: "Estudiante",
        estado: "Activo",
        tipo_documeto: userData.tipo_documento,
        sexo: userData.sexo,
        fecha_nacimiento: userData.fecha_nacimiento,
        direccion: userData.direccion,
        ciudad: userData.ciudad,
        telefono: userData.telefono,
        celular: userData.celular,
        grado: userData.grado,
      })
      .then((res) => {
        if (res.data.message === "Bad") {
          swal.fire({
            title: "Error 500",
            text: "Por favor reintente o vuelva después",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332",
          });
          console.log(res.data);
        } else {
          console.log(res.data);
          swal.fire({
            title: "Usuario creado correctamente",
            icon: "success",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#54e346",
          });
          clearFields();
        }
      });
  };

  const clearFields = () => {
    const userName = document.querySelector("#nombre_completo");
    const userDocument = document.querySelector("#documento");
    const userEmail = document.querySelector("#correo");
    const userPassword = document.querySelector("#contrasena");
    const userTarjeta = document.querySelector("#tipo_documento");
    const userSexo = document.querySelector("#sexo");
    const userFechaNacimiento = document.querySelector("#fecha_nacimiento");
    const userDireccion = document.querySelector("#direccion");
    const userCiudad = document.querySelector("#ciudad");
    const userTelefono = document.querySelector("#telefono");
    const userCelular = document.querySelector("#celular");
    const userGrado = document.querySelector("#grado");

    const userInputs = [userName, userDocument, userEmail, userPassword,userTarjeta,userSexo,userFechaNacimiento,userDireccion,userCiudad,userTelefono,userCelular,userGrado];

    for (const input of userInputs) {
      input.value = "";
    }
  };

  return (
    <section className="container-fluid w-100">
      <Card className="mx-auto my-5 p-5" style={{ width: "40rem" }}>
        <div className="mx-auto text-center ">
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

            <Form.Control
              as="select"
              id="tipo_documento"
              className="my-3"
              onChange={insertUser}
            >
              <option>Tipo de documento</option>
              <option>TI</option>
              <option>CC</option>
              <option>NUIP</option>
            </Form.Control>
            <Form.Control
              as="select"
              id="sexo"
              className="my-3"
              onChange={insertUser}
            >
              <option>Sexo</option>
              <option>Femenino</option>
              <option>Masculino</option>
              <option>Otro</option>
            </Form.Control>
            <input
              type="text"
              className="form-control my-3"
              id="fecha_nacimiento"
              placeholder="Fecha de nacimiento"
              onChange={insertUser}
            />
            <input
              type="text"
              className="form-control my-3"
              id="direccion"
              placeholder="Direccion"
              onChange={insertUser}
            />
            <input
              type="text"
              className="form-control my-3"
              id="ciudad"
              placeholder="Ciudad"
              onChange={insertUser}
            />
            <input
              type="text"
              className="form-control my-3"
              id="telefono"
              placeholder="Telefono"
              onChange={insertUser}
            />
            <input
              type="text"
              className="form-control my-3"
              id="celular"
              placeholder="Celular"
              onChange={insertUser}
            />
            <Form.Control
              as="select"
              id="grado"
              className="my-3"
              onChange={insertUser}
            >
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

        <div className="d-flex justify-content-center align-items-center">
          <a href="/admin" className="m-auto">
            <Button variant="info" className="mt-4 px-5">
              <b>Regresar</b>
            </Button>
          </a>
          <a href="#" className="m-auto">
            <Button
              variant="success"
              className="mt-4 px-5"
              onClick={insertarUsuario}
            >
              <b>Guardar</b>
            </Button>
          </a>
          <a href="#" className="m-auto">
            <Button
              variant="danger"
              className="mt-4 px-5"
              onClick={clearFields}
            >
              <b>Cancelar</b>
            </Button>
          </a>
        </div>
      </Card>
    </section>
  );
};

export default StudentRegistration;
