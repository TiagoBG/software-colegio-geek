import React from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

const RegistrationButtons = () => {
  return (
    <section className="container-fluid w-100">
      <Card className='mx-auto my-5 p-5' style={{ width: '25rem' }}>
      <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-danger mx-1 ">
              Cancelar
        </button>
            <button type="submit" className="btn btn-success mx-1">
              Guardar
        </button>
          </div>
      </Card>
    </section>
  );
};
export default RegistrationButtons;



