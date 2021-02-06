import React, { useState, useEffect} from "react";
import api from "../axios/axios";
import swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getFromLocal } from '../functions/localStorage';

const StudentRegistration = () => {
  const rol_inicio_s = getFromLocal('rol_inicio_s');
  if(rol_inicio_s!=='Admistrador'){
    window.location.href="/";
  }
  const [fileImg, setFileImg] = useState('');
  const [fileDoc, setFileDoc] = useState('');
  const [docname, setDocname] = useState('Cargar Documento');
  const [imgname, setImgname] = useState('Cargar Imagen');
  const [pathImg, setPathImg] = useState('');
  const [pathDoc, setPathDoc] = useState('');
  const [userData, setUserData] = useState({});
  useEffect(() => { });

  const onChangeImg = e => {
    setFileImg(e.target.files[0]);
    console.log(e.target.files[0]);
    setImgname(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };
  const onChangeDoc = e => {
    setFileDoc(e.target.files[0]);
    console.log(e.target.files[0]);
    setDocname(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };

  const onSubmitDoc = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('doc', fileDoc, docname);
    try {
      const res = await api.post('/send-doc', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      if (res.data.status === 0) {
        setFileDoc('')
        setDocname('Cargue un archivo válido...')}
      else{     
        setPathDoc(res.data.message.path);
        swal.fire({
          title: "¡Documento subido!",
          text: "Puede continuar",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#54e346",
        });
      }
    } catch (err) {
      alert('Error en el servidor');
    }
  };
  const onSubmitImg = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', fileImg, imgname);
    try {
      const res = await api.post('/send-img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      if (res.data.status === 0) {
        setFileImg('')
        setImgname('Cargue un archivo válido...')}
      else{     
        setPathImg(res.data.message.path);
        swal.fire({
          title: "¡Imagen subida!",
          text: "Puede continuar",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#54e346",
        });
      }

    } catch (err) {
      alert(err);
    }
  };

  function insertUser(e) {
    let name = e.target.id;
    let value = e.target.value;
    setUserData((state) => ({
      ...userData,
      [name]: value,
    }));
    console.log(userData);
  }


  const sendInfo = (event) => {
    event.preventDefault();
    console.log(userData);
    const data = {
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
        url_foto: pathImg,
        url_doc_identidad: pathDoc
      };

    //Envio de correo y registro en BD
    api.post('/sendEmail', data).then((res) => {
      if (res.state === 0) {
        alert('No se pudo enviar la confimación de credenciales al correo proporcionado');
      } else {
        api.post("/register_student", data).then((res) => {
          if (res.data.state === 0) {
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
              title: "¡Estudiante registrado con éxito!",
              icon: "success",
              confirmButtonText: "¡Entendido!",
              confirmButtonColor: "#54e346",
            });

            clearFields();
          }
        });
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

    const userInputs = [userName, userDocument, userEmail, userPassword, userTarjeta, userSexo, userFechaNacimiento, userDireccion, userCiudad, userTelefono, userCelular, userGrado];
    for (const input of userInputs) {
      input.value = "";
    }

    userTarjeta.value = "Tipo de documento";
    userSexo.value = "Sexo";
    userGrado.value = "Grado";

    setImgname('Cargar Imagen');
    setDocname('Cargar Documento');
  };

  return (
    <section className="container-fluid w-100">
      <Card className="mx-auto my-5 p-5" style={{ width: "40rem" }}>
        <div className="mx-auto text-center ">
          <h3>Registro de Estudiantes </h3>
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
        <form onSubmit={onSubmitDoc}>
          <div>
            <div className='custom-file mb-4' >
              <input
                type='file'
                className='custom-file-input'
                id='customFile'
                onChange={onChangeDoc}
              />
              <label className='custom-file-label' htmlFor='customFile'>
                {docname}
              </label>
            </div>
            <input
              type='submit'
              value='Upload'
              className='btn btn-primary btn-block mt-4'
            />
          </div>
        </form>

        <form onSubmit={onSubmitImg}>
          <div>
            <div className='custom-file mb-4' >
              <input
                type='file'
                className='custom-file-input'
                id='customFile1'
                onChange={onChangeImg}
              />
              <label className='custom-file-label' htmlFor='customFile1'>
                {imgname}
              </label>
            </div>
            <input
              type='submit'
              value='Upload'
              className='btn btn-primary btn-block mt-4'
            />
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
              onClick={sendInfo}
            >
              <b>Guardar</b>
            </Button>
          </a>
        </div>
      </Card>
    </section>
  );
};

export default StudentRegistration;