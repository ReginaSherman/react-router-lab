import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import About from "./About";
import Stock from "./Stock";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/stocks">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Route
            exact
            path="/stocks"
            render={() => {
              return <Dashboard stocksData={this.props.stocksData} />;
            }}
          />
          <Route path="/about" component={About} />
          <Route
            path="/stocks/:symbol"
            render={routerProps => {
              return (
                <Stock
                  match={routerProps.match}
                  stocksData={this.props.stocksData}
                />
              );
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
