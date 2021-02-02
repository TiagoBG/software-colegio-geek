import React, { useState, useEffect } from "react";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SubjectRegistration = () => {
 

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
            />
              <div class="form-check" id="sexto">
            <input class="form-check-input" type="checkbox" value="true" />
              <label class="form-check-label" for="flexCheckDefault" >
                Sexto
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="septimo"/>
              <label class="form-check-label" for="flexCheckDefault">
                Septimo
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="octavo"/>
              <label class="form-check-label" for="flexCheckDefault">
                Octavo
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="noveno"/>
              <label class="form-check-label" for="flexCheckDefault">
                Noveno
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="decimo"/>
              <label class="form-check-label" for="flexCheckDefault">
                Decimo
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="once"/>
              <label class="form-check-label" for="flexCheckDefault">
                Once
              </label>
          </div>
          </div>
          
        </form>
          <div className="d-flex justify-content-center align-items-center">

            <a href="/admin" className='m-auto'><Button variant='info' className='mt-4'><b>Regresar</b></Button></a>
            <a href="#" className='m-auto'><Button variant='success' className='mt-4'><b>Guardar</b></Button></a>
            <a href="#" className='m-auto'><Button variant='danger' className='mt-4' onClick={clearFields}><b>Cancelar</b></Button></a>
          </div>
      </Card>
    </section>
  );
};
export default SubjectRegistration;
