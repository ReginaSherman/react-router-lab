import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/stocks">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Route path="/about" component={About} />
        <Route path="/stocks" component={Dashboard} />
        <Route path="/stocks/:symbol" component={Stock} />
      </div>
    );
  }
}

export default App;
