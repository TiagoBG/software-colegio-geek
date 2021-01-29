import React from 'react';
import Card from 'react-bootstrap/Card';

export default function FollowUp(){

    return (
        <section>
            <Card className='mx-auto my-5 p-5' style={{ width: '18rem' }}>
                <div className='mx-auto'>
                    <h3>Consulta de Actividades</h3>
                    <h4>_____ - _____</h4>
                    <div>
                        <img src="../images/smiley.jpg" alt="Congrats!"/>
                        <p>¡Felicidades! Estás al día con tus actividades</p>
                    </div>
                </div>                
            </Card>        
        </section>
    )

}