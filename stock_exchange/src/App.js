import React from "react";
import GraphContainer from "./components/GraphContainer";
import Container from "./components/Container";
import Row from "./components/Row";
import UserBlock from "./components/UserBlock";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/books" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
