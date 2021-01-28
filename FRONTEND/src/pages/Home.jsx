import React from 'react';
import Form from '../components/Form';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import Login from '../components/home/Login';

export default function Home(){
    return(
        <section>
            <Header/>
            <Login/>
            <Footer/>
        </section>
    )
}