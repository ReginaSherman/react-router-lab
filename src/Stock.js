import React, { Component } from "react";

class Stock extends Component {
  componentDidMount() {
    const url = `https://api.iextrading.com/1.0/tops?symbols=
      ${this.props.match.params.symbol}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.props.setStock(response[0]);
      });
  }
  render() {
    console.log(this.props.stock);
    return (
      <div>
        <h2>{this.props.stock.symbol}</h2>
        <h2>{this.props.stock.marketPercent}</h2>
      </div>
    );
  }
}

export default Stock;
