import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  render() {
      return (
            <div className="line-chart">
              <Line data={this.props.chartData} height={100}/>
            </div>
      );
    }
  }

  export default Chart;
