import React, { Component } from "react";

class Stock extends Component {
  render() {
    // look for the specific stock in our stock database
    // let result;
    // for (let i = 0; i < this.props.stocksData.length; i++) {
    //   if (this.props.stocksData[i].symbol === this.props.match.params.symbol) {
    //     result = this.props.stocksData[i];
    //   }
    // }

    let result = this.props.stocksData.find(
      stock => stock.symbol === this.props.match.params.symbol
    );
    return (
      <div>
        <h2>
          {result.name} {result.symbol}
        </h2>
        <ul>
          <li>Current Price: {result.lastPrice}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
