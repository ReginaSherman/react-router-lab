import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Stock from "./Stock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: "AAPL"
    };
  }

  setSelectedStock = selectedStock => {
    this.setState({ selectedStock });
    // this.setState({ selectedStock: selectedStock });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/stocks">Home</Link>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/stocks"
              render={() => (
                <Dashboard setSelectedStock={this.setSelectedStock} />
              )}
            />
            <Route
              path="/stocks/:symbol"
              render={() => <Stock selectedStock={this.state.selectedStock} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
