import React from 'react';
import {Home} from "./Views/Home";
import {About} from "./Views/About";
import {Nav} from "./Components/Nav";
import {Works} from "./Views/Works";
import {Contact} from "./Views/Contact";
import {SampleProject} from "./Views/SampleProject";
import {NotFound} from "./Views/NotFound";
import {Footer} from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <ScrollToTop/>
          <Nav/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/works" exact>
              <Works/>
            </Route>
            <Route path="/works/sample-project" exact>
              <SampleProject/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
