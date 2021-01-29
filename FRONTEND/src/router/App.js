import React from 'react';
import Home from '../pages/Home';
import Estudiante from '../pages/Estudiante';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FollowUp from '../components/FollowUp';
import Activities from '../components/Activities';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/estudiante" component={Estudiante} />
        <Route exact path="/seguimiento/:id" component={FollowUp} />
        <Route exact path="/activities/:id" component={Activities} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
