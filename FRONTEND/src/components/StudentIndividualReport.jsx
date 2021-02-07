import {React,useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from "../axios/axios";



const StudentIndividualReport = () => {
    const [pdf,setPdf] = useState('<p>Hola</p>');

    const getStudetForReport = (e) => {
        e.preventDefault();
        const codigo_estudiante = document.querySelector('#codigo-estudiante').value;
        
        api.get(`/reporte-estudiante/${codigo_estudiante}`).then((res)=>{
            if(res.data.state === 1){
                setPdf(res.data.message);
            }else{
                alert('Error al generar reporte');
            }
        })   
    }

    return(
        <section  className="container-fluid w-100" >
            <div className="container d-flex container_intro_home my-5">
                <h4 className='intro_home mt-2 text-white mx-auto'>
                    Reporte de calificaciones por estudiante
                </h4>
            </div>
            <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
                <div className='mx-auto text-center mb-4'>
                    <h3>Ingresa el código del estudiante</h3>
                </div>
                <Form>
                    
                    <Form.Control type="text" placeholder="Documento" required name="codigo-estudiante" id='codigo-estudiante' className="shadow-lg my-3"/>
                       
                </Form>


                <a className='m-auto'><Button  variant='info' className='mt-4 px-5 action-button' onClick={getStudetForReport}><b>Ver Reporte</b></Button></a>
                <a href="" className='m-auto'  download  id="linkPdf"><Button  variant='info' className='mt-4 px-5 action-button'><b>Descargar reporte</b></Button></a>
                <a href="/reporte-final" className='m-auto'><Button variant='danger' className='mt-4 px-5 action-button'><b>Regresar</b></Button></a>
            </Card>
        </section>
    )
}

export default StudentIndividualReport