import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import Estudiante from '../pages/Estudiante';
import Seguimiento from '../pages/Seguimiento';
import Actividad from '../pages/Actividad';
import Docente from '../pages/Docente';
import VerNotas from '../pages/VerNotas';
import Admin from '../pages/Admin';
import UserReg from '../pages/UserRegistration';
import RegistroMaterias from '../pages/RegistroMaterias';
import RegistroGrupo from '../pages/RegistroGrupo';
import ReporteFinal from '../pages/ReporteFinal';

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
        <Route path="/admin" component={Admin} />        
        <Route path="/user-registration" component={UserReg} />
        <Route path="/registro-materias" component={RegistroMaterias} />
        <Route path="/registro-grupo" component={RegistroGrupo} />
        <Route path="/reporte-final" component={ReporteFinal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
