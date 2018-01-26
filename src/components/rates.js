import React, { Component } from 'react';

class Rates extends Component {
    render() {
        return (
            <div>
                <p>${this.props.regionalRate}/hr</p>
                <p>Median Hourly Earnings</p>
                <p>Nation: ${this.props.nationalRate}0/hr</p>
            </div>
      );
    }
  }

  export default Rates;
