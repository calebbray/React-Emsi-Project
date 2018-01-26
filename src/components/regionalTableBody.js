import React, { Component } from 'react';

class RegionalTablebody extends Component {
    render() {
        return (
            <tr>
              <td className="left-column">Region</td>
              <td className="right-column">{this.props.regional[0]}</td>
              <td className="right-column">{this.props.regional[this.props.regional.length-2]}</td>
              <td className="right-column">{(this.props.regional[this.props.regional.length-2] - this.props.regional[0])}</td>
              <td className="right-column">{((1 - (this.props.regional[this.props.regional.length-2] / this.props.regional[0])) * -100).toFixed(1)}%</td>
            </tr>
      );
    }
  }

  export default RegionalTablebody;
