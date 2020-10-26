import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Homescreen from "./Components/homescreen";

class App extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Switch className="container">
            <Route path="/" exact component={Homescreen} />
          </Switch>
        </Router>
      </div>
        );
    }
}

export default App;