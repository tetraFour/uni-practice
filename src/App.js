import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { Faculties, About, Root, Faculty } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/faculties">
            <Faculties />
          </Route>
          <Route path="/faculties/:id">
            <Faculty />
          </Route>
          <Route exact path="/">
            <Root />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
