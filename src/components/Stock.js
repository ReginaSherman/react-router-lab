import React, { Component } from "react";

class Stock extends Component {
  componentDidMount() {
    const url =
      "https://api.iextrading.com/1.0/tops?symbols=" +
      this.props.match.params.symbol;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.props.setStock(response[0]);
      });
  }

  render() {
    const { stock } = this.props;
    return (
      <div>
        <h2>({stock.symbol})</h2>
        <ul>
          <li>Last Sale Price: {stock.lastSalePrice}</li>
          <li>Security Type: {stock.securityType}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
