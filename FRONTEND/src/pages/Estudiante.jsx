import React from 'react';
import Form from '../components/Form';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import Login from '../components/Login';
import Fondo from "../images/fondo_colegio.jpg";

export default function Estudiante(){
    return(
        <section style={{backgroundImage: `url(${Fondo})`}}>
            <Header/>
       
            <Footer/>
        </section>
    )
}