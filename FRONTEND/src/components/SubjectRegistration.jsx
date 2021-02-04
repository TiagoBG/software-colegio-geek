import React, { useState, useEffect } from "react";
import swal from "sweetalert2";
import api from "../axios/axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SubjectRegistration = () => {
  const [userData, setUserData] = useState({ sexto: "false", septimo: "false", octavo: "false", noveno: "false", decimo: "false", once: "false" });
  function grade(e) {
    let name = e.target.id;
    let value = "";
    if (name === "nombre_materia") { value = e.target.value }
    else {
      value = "false";
      if (e.target.checked)
       {value = "true"}
    }
    setUserData((state) => ({
      ...userData,
      [name]: value
    }));
    console.log(value);
    console.log(e.target.id);
    console.log(userData);
    console.log(e.target.checked);
  }

  function sendInfo(e) {
    e.preventDefault();
    const data = {
      nombre: userData.nombre_materia,
      sexto: userData.sexto,
      septimo: userData.septimo,
      octavo: userData.octavo,
      noveno:  userData.noveno,
      decimo: userData.decimo,
      once: userData.once
    };

    api.post('/register-subject',data).then((res)=>{
      if (res.state === 0) {
        swal.fire({
          title: "Error 500",
          text: "Por favor reintente o vuelva después",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#f96332",
        });
      } else {
        swal.fire({
          title: "Materia creada correctamente",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#54e346",
        })
    }
  });
  }
    

  const clearFields = () => {
    const userName = document.querySelector('#nombre_materia');
    const Sexto = document.querySelector('#sexto');
    const userInputs = [userName, Sexto]
    for (const input of userInputs) {
      input.value = '';
    }
    alert('Los campos serán eliminados');
  }

  return (
    <section className="container-fluid w-100">
      <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Materias</h3>
        </div>
        <form className="mb-4">
          <div className="mb-0">
            <input
              type="email"
              className="form-control my-3"
              id="nombre_materia"
              aria-describedby="emailHelp"
              placeholder="Nombre de la materia"
              onChange={grade}
            />
            <div class="form-check" id="sexto">
              <input class="form-check-input" type="checkbox" value="true" id="sexto" onChange={grade} />
              <label class="form-check-label" for="flexCheckDefault" >
                Sexto
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="true" id="septimo" onChange={grade} />
              <label class="form-check-label" for="flexCheckDefault">
                Septimo
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="true" id="octavo" onChange={grade} />
              <label class="form-check-label" for="flexCheckDefault">
                Octavo
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="true" id="noveno" onChange={grade} />
              <label class="form-check-label" for="flexCheckDefault">
                Noveno
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="true" id="decimo" onChange={grade} />
              <label class="form-check-label" for="flexCheckDefault">
                Decimo
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="true" id="once" onChange={grade} />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Once
              </label>
            </div>
          </div>

        </form>
        <div className="d-flex justify-content-center align-items-center">

          <a href="/admin" className='m-auto'><Button variant='info' className='mt-4'><b>Regresar</b></Button></a>
          <a href="#" className='m-auto'><Button variant='success' className='mt-4' onClick={sendInfo}><b>Guardar</b></Button></a>
          <a href="#" className='m-auto'><Button variant='danger' className='mt-4' onClick={clearFields}><b>Cancelar</b></Button></a>
        </div>
      </Card>
    </section>
  );
};
export default SubjectRegistration;