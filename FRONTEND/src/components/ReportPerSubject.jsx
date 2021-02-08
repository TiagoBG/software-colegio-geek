import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import api from "../axios/axios";
import { getFromLocal, saveToLocal } from '../functions/localStorage';
import logo from '../images/logo_colegio_geek.png';
import ReactToPrint from 'react-to-print';

export default function SeeGrades() {
    const [infoUsuario, setInfoUsuario] = useState([]);
    const grado = getFromLocal("grado");
    const ref = useRef();

    const rol_inicio_s = getFromLocal('rol_inicio_s');
    if(rol_inicio_s!=='Administrador'){
        window.location.href="/";
    }
    let promFinal = [];

    useEffect(() => {
        verNotasGrupo();
        
    },[]);

    
    function convertir(a) {
        let arr = [];
        a = a.split(",")
        for (let index = 0; index < a.length; index++) {
            arr.push(parseInt(a[index]));
        }
        return arr.reduce((a, b) => a + b) / arr.length.toFixed(1)
         
    }
    function sumar(segu, auto, coe, prue) {
        return parseFloat((segu * 0.6) + (auto * 0.1) + (coe * 0.1) + (prue * 0.2)).toFixed(1);
    }

    function verNotasGrupo() {
        if (grado) {
            api.get(`reporte-prom-grado/${grado}`).then(
            (res) => {
              setInfoUsuario(res.data.rows);
            }
            );
        }
        console.log(grado)
       
    } 

    infoUsuario.map((info, i) => {
        promFinal.push(parseFloat(sumar(convertir(info.seguimiento),info.autoevaluacion, info.coevaluacion, info.evaluacion_periodo)))});

   promFinal = (promFinal.reduce((a,b) => a + b, 0) / promFinal.length).toFixed(2);
                               
        // setPromedioGrado(promFinal);
    console.log(promFinal);
    
    
    return (
        <section className="container-fluid w-100">
            <Card className='mx-auto my-5 p-5' style={{ width: '75vw' }}>
                <div className='mx-auto mb-4'>
                </div>
                <div className='mx-auto'>
                    <a href="/reporte-prom-grado" className='mx-4'><Button variant='danger' className='mt-4 px-5'><b>Regresar</b></Button></a>
                </div>
                <div className='mb-5 mt-4' ref={ref}>
                    <h3 className='my-5 text-center'>Reporte promedio de la: {grado}</h3>
                    <Card>
                        <div className='d-flex mx-auto'>
                        <img src={logo} width='100px' alt="colegio-geek"/>

                        </div>
                        <h6 className='p-4 mx-auto'>
                           <h5>Comunicado #6</h5><br/>

                            <p>En el presente reporte se informa que el promedio general del grado: {grado}, durante este año académico en Colegio Geek es de <b>{promFinal}</b>.<br/></p>

                            <p>Este reporte es generado con el fin de reafirmar nuestro compromiso con la educación.<br/></p>

                            <p>Saludos cordiales,<br/></p>

                            <h5 className='text-center'>Colegio Geek</h5>
                        </h6>
                    </Card>
                </div>
                <ReactToPrint
                trigger={() => <Button variant='success' className='mt-4 px-5 action-button'>Descargar Reporte</Button>}
                content={() => ref.current}/>
            </Card>            
        </section>
    )

}