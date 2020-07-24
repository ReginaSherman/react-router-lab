import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    console.log(this.props.stocksData);
    return (
      <div>
        <h2>Stocks</h2>
        <ul>
          {this.props.stocksData.map((stock, index) => {
            return (
              <li key={index}>
                {stock.name}{" "}
                <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
