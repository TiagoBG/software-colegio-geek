import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/estudiantes">Estudiantes</Link>
              </li>
              <li>
                <Link to="/docentes">Docentes</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/estudiantes">
              <Estudiantes />
            </Route>
            <Route path="/docentes">
              <Docentes />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
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
