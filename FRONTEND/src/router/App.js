import React from 'react';
import Home from '../pages/Home';
import Estudiante from '../pages/Estudiante';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Seguimiento from '../pages/Seguimiento';
import Actividades from '../pages/Actividades';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/estudiante" component={Estudiante} />
        <Route path="/seguimiento" component={Seguimiento} />
        <Route path="/actividades" component={Actividades} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
