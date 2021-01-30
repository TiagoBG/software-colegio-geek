import React from 'react';
import Home from '../pages/Home';
import UserReg from '../pages/UserRegistration';
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
        <Route path="/actividades/:id" component={Actividades} />
        <Route path="/UserRegistration" component={UserReg} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
