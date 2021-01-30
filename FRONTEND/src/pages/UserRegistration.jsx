import React from 'react';
import Form from '../components/Form';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import UserRegistration from '../components/UserRegistration';


export default function UserRegistration(){
    return(
        <section>
            <Header/>
            <br/>
            <UserRegistration/>
            <br/>
            <Footer/>
        </section>
    )
}