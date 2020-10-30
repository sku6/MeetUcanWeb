import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Homescreen from "./Components/homescreen";
import Feed from "./Components/feed";

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
            <Route path="/feed" exact component={Feed} />
          </Switch>
        </Router>
      </div>
        );
    }
}

export default App;