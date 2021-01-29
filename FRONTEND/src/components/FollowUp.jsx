import React from 'react';
import Card from 'react-bootstrap/Card';

export default function FollowUp(){

    return (
        <section>
            <Card className='mx-auto my-5 p-5' style={{ width: '18rem' }}>
                <div className='mx-auto'>
                    <h3>Seguimiento</h3>
                    <h4>______ - ______</h4>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>Títulos</th>
                        </tr>
                        <tr>
                            <td>Materias</td>
                        </tr>
                    </table>
                </div>
            </Card>        
        </section>
    )

}