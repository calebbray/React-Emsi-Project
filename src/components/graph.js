import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  render() {
      return (
            <div className="line-chart">
              <Line 
                data={this.props.chartData} 
                options={{
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  hover: {
                    mode: null
                  },
                  title: {
                    text: 'Percentage Change',
                    position: 'left',
                    display: true
                  },
                  scales: {
                    yAxes: [{
                      gridlines: {
                        display: false
                      }
                    }]
                  }
                }} 
                height={100}/>
            </div>
      );
    }
  }

  export default Chart;
