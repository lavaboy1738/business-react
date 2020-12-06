import React, { useEffect } from 'react';
import {Home} from "./Views/Home";
import {About} from "./Views/About";
import {Nav} from "./Components/Nav";
import {Works} from "./Views/Works";
import {Contact} from "./Views/Contact";
import {SampleProject} from "./Views/SampleProject";
import {NotFound} from "./Views/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import {AnimatePresence} from "framer-motion";

import {
  BrowserRouter as Router,
  Switch,
  Route, useLocation, useHistory
} from "react-router-dom";

function App(){
  const location = useLocation();

  return (
    <div className="App">
        <ScrollToTop/>
        <Nav/>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
          </AnimatePresence>
    </div>
  );
}

export default App;
