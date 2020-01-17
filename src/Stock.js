import React, { Component } from "react";
import data from "./data/stock-data.json";

class Stock extends Component {
  componentDidMount() {
    const url = `https://api.iextrading.com/1.0/tops?symbols=${this.props.selectedStock}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.props.setSelectedStockFromAPI(response[0]);
      });
  }
  render() {
    const stock = this.props.selectedStockFromAPI;
    return (
      <div>
        <h2>{stock.symbol}</h2>
        <ul>
          <li>{stock.lastSalePrice}</li>
          <li>{stock.securityType}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
