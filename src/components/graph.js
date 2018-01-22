import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state ={
      chartData: {
        labels: [2013, 2014, 2015, 2016, 2017, 2018],

        datasets: [
          {
            label: 'Regional',
            data: [11904, 12384, 12352, 12680, 12920, 13114],
            fill: false
          },
          {
            label: 'State',
            data: [13103, 13598, 13599, 13968, 14244, 14469],
            fill: false

          }
        ]
      }
    }
  }

  render() {
      return (
            <div className="line-chart">
              <Line data={this.state.chartData} height={100}/>
            </div>
      );
    }
  }

  export default Chart;
