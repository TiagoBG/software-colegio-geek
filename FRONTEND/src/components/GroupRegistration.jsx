import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import api from "../axios/axios";
import swal from "sweetalert2";
import { saveToLocal,getFromLocal } from '../functions/localStorage';


const GroupRegistration = () => {
  const [teacher, setTeacher] = useState([]);
  const rol_inicio_s = getFromLocal('rol_inicio_s');
    /*if(rol_inicio_s!=='Admistrador'){
        window.location.href="/";
    }*/
  useEffect(() => {
    teacherForGroup()
  }, []);

  const teacherForGroup = () => {
    api.get(`/registro-grupo`).then(
      (res) => {
        setTeacher(res.data.rows)
      }
    );
  }

  const nextGroupStudents = () => {
    
    let id_director_grupo = document.querySelector('#nombre_docente').value;
    const jornada = document.querySelector('#jornada').value;
    const grado = document.querySelector('#grado').value;
    id_director_grupo=id_director_grupo.split(". ");
    id_director_grupo=id_director_grupo[0];
    saveToLocal('id_director_grupo', id_director_grupo); 
    saveToLocal('grado', grado);
    const data = {
      id_director_grupo: id_director_grupo,
      jornada: jornada,
      grado: grado
    }
    api.post('/register_groups',data).then((res)=>{
      if(res.status === 201){
        alert('No podra modificar los campos ingresados anteriormente')
        console.log(res.data);
        saveToLocal('id_grupo', res.data.message[0].id);
        console.log(res.data.message[0].id)
      }
      else{
        swal.fire({
          title: "Error 500",
          text: "Por favor reintente o vuelva después",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#f96332",
        });      
      }
    })
  }

  return (
    <section className="container-fluid w-100">
      <div className="container d-flex container_intro_home mb-5">
        <h4 className="intro_home mt-2 text-white mx-auto">
          Esta sección está destinada a generar la distribuición de los grupos
            </h4>
      </div>
      <Card className='mx-auto my-5 p-5' style={{ width: '40rem' }}>
        <div className='mx-auto text-center '>
          <h3>Registro de Grupos</h3>
        </div>
        <form className="mb-4">
          <div className="mb-0">
            <Form.Control as="select" required name="rol" id='nombre_docente' className="shadow-lg my-3">
              <option>---Selecciona el director de grupo---</option>
              {teacher.map((item) =>
                <option key={item.id}>{item.id}. {item.nombre_completo}</option>
              )};
            </Form.Control>
            <Form.Control as="select" className="my-3" id="jornada"  >
              <option>Jornada</option>
              <option>AM</option>
              <option>PM</option>
            </Form.Control>
            <Form.Control as="select" className="my-3" id="grado" >
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
          <a href="/admin" className='m-auto'><Button variant='info' className='mt-4 px-5'><b>Regresar</b></Button></a>
          <a  href="/grupo-estudiantes" className='m-auto' onClick={nextGroupStudents}><Button variant='success' className='mt-4 px-5' ><b>Siguiente</b></Button></a>
        </div>
      </Card>
    </section>
  );
};
export default GroupRegistration;
