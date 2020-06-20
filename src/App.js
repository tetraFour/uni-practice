import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Header } from "./components";
import { Users, About } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
