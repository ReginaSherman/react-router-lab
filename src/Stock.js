import React, { Component } from "react";
import data from "./data/stock-data.json";

class Stock extends Component {
  render() {
    // let stock;
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].symbol === this.props.selectedStock) {
    //     stock = data[i];
    //   }
    // }

    let stock = data.find(stock => stock.symbol === this.props.selectedStock);
    return (
      <div>
        <h2>
          {stock.name} {stock.symbol}
        </h2>
        <ul>
          <li>Current Price: {stock.lastPrice}</li>
          <li>Change: {stock.change}</li>
          <li>High: {stock.high}</li>
          <li>Low: {stock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
