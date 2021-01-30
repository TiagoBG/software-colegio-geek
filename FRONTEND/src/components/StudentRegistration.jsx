import React from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

const StudentRegistration = () => {
    return (
        <section className="container-fluid w-100">
            <Card className='mb-5' style={{ width: '32rem' }}>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Registroestudiantes
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <form className="mb-4">
                            <div className="mb-0">
                                <Form.Control as="select" className="my-3">
                                    <option>Tipo de documento</option>
                                    <option>TI</option>
                                    <option>CC</option>
                                    <option>NUIP</option>
                                </Form.Control>
                                <Form.Control as="select" className="my-3">
                                    <option>Sexo</option>
                                    <option>Femenino</option>
                                    <option>Masculino</option>
                                    <option>Otro</option>
                                </Form.Control>
                                <input
                                    type="password"
                                    className="form-control my-3"
                                    id="exampleInputPassword1"
                                    placeholder="Fecha de nacimiento"
                                />
                                <input
                                    type="password"
                                    className="form-control my-3"
                                    id="exampleInputPassword1"
                                    placeholder="Dirreccion"
                                />
                                <input
                                    type="password"
                                    className="form-control my-3"
                                    id="exampleInputPassword1"
                                    placeholder="Ciudad"
                                />
                                <input
                                    type="password"
                                    className="form-control my-3"
                                    id="exampleInputPassword1"
                                    placeholder="Telefono"
                                />
                                <input
                                    type="password"
                                    className="form-control my-3"
                                    id="exampleInputPassword1"
                                    placeholder="Celular"
                                />
                            </div>
                        </form>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Card>
        </section>
    );
};
export default StudentRegistration;




