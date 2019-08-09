import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch'; 

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      data: []
    }
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route  path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
    );
  }
}

export default App;
