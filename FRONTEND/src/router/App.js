import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import Estudiante from '../pages/Estudiante';
import Seguimiento from '../pages/Seguimiento';
import Actividad from '../pages/Actividad';
import Docente from '../pages/Docente';
import VerNotas from '../pages/VerNotas';
import Administrador from '../pages/Administrador';
import UserReg from '../pages/UserRegistration';
import StudentReg from '../pages/StudentRegistration';
import RegistroMaterias from '../pages/RegistroMaterias';
import RegistroGrupo from '../pages/RegistroGrupo';
import ReporteFinal from '../pages/ReporteFinal';
import EditarNotas from '../pages/EditarNotas';

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
        <Route path="/admin" component={Administrador} />        
        <Route path="/user-registration" component={UserReg} />
        <Route path="/student-registration" component={StudentReg} />
        <Route path="/registro-materias" component={RegistroMaterias} />
        <Route path="/registro-grupo" component={RegistroGrupo} />
        <Route path="/reporte-final" component={ReporteFinal} />
        <Route path="/editar-notas" component={EditarNotas} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
