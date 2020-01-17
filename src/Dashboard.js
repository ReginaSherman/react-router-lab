import React, { Component } from "react";
import data from "./data/stock-data.json";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    let stocks = data.map((stock, index) => {
      let symbol = stock.symbol;

      return (
        <li
          key={`${symbol}-${index}`}
          onClick={() => this.props.setSelectedStock(symbol)}
        >
          {stock.name} <Link to={`/stocks/${symbol}`}>{symbol}</Link>
        </li>
      );
    });

    return (
      //  create and render unordered list of stocks
      <div>
        <h2>Stocks</h2>
        <ul>{stocks}</ul>
      </div>
    );
  }
}

// export Dashboard
export default Dashboard;
