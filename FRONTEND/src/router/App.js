import React from 'react';
import Home from '../pages/Home';
import UserRegistration from '../pages/UserRegistration';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/UserRegistration" component={UserRegistration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
