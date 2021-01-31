import React from 'react';
import Home from '../pages/Home';
import UserReg from '../pages/UserRegistration';
import Estudiante from '../pages/Estudiante';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Seguimiento from '../pages/Seguimiento';
import Actividad from '../pages/Actividad';
import Docente from '../pages/Docente';
import VerNotas from '../pages/VerNotas';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/estudiante" component={Estudiante} />
        <Route path="/seguimiento" component={Seguimiento} />
        <Route path="/actividades" component={Actividad} />
        <Route path="/docente" component={Docente} />
        <Route path="/ver-notas" component={VerNotas} />
         
      </Switch>
    </BrowserRouter>
  );
}

export default App;
