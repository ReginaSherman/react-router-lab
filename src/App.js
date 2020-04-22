import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import { Link, Route } from "react-router-dom";
import stocksData from "./data/stock-data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: stocksData,
      stock: { symbol: "N/A", lastSalePrice: "N/A", securityType: "N/A" }
    };
  }

  setStock = stock => {
    this.setState({ stock });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/stocks">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Route path="/about" component={About} />
        <Route
          exact
          path="/stocks"
          render={() => {
            return <Dashboard stocks={this.state.stocks} />;
          }}
        />
        <Route
          path="/stocks/:symbol"
          render={routerProps => {
            return (
              <Stock
                match={routerProps.match}
                setStock={this.setStock}
                stock={this.state.stock}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
