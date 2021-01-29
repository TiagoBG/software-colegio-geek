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

export default App;
