import React from 'react';
import {About} from "./Views/About";
import {Nav} from "./Components/Nav";
import {Works} from "./Views/Works";
import {Contact} from "./Views/Contact";
import {NotFound} from "./Views/NotFound";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact>
              <About/>
            </Route>
            <Route path="/works" exact>
              <Works/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
