import React from 'react';
import Home from '../pages/Home';
import Estudiante from '../pages/Estudiante';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/estudiante" component={Estudiante} />
      </Switch>
    </BrowserRouter>
  );
}

function Estudiantes() {
  return <h2>Bienvenido Estudiante</h2>;
}

function Docentes() {
  return <h2>Bienvenido Docente</h2>;
}

function Admin() {
  return <h2>Bienvenido Admin</h2>;
}


export default App;
