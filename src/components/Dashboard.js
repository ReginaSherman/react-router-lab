import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const stocks = this.props.stocks;
    let listOfStocks = stocks.map((stock, index) => {
      return (
        <li key={`${stock}-${index}`}>
          {stock.name} <Link to={`stocks/${stock.symbol}`}>{stock.symbol}</Link>
        </li>
      );
    });

    return (
      <section>
        <h2>Stocks</h2>
        <ul>{listOfStocks}</ul>
      </section>
    );
  }
}

export default Dashboard;
