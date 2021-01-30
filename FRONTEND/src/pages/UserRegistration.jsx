import React from 'react';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import UserRegistration from '../components/UserRegistration';
import StudentRegistration from '../components/StudentRegistration';
import RegistrationButtons from '../components/RegistrationButtons';
import Fondo from "../images/fondo_colegio.jpg";


export default function UserReg(){
    return(
        <section style={{backgroundImage: `url(${Fondo})`}}>
            <Header/>
            <br/>
            <UserRegistration/>
            <StudentRegistration/>
            <RegistrationButtons/>
            <br/>
            <Footer/>
        </section>
    )
}