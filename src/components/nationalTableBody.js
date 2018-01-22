import React, { Component } from 'react';

class NationalTablebody extends Component {
    render() {
        return (
            <tr>
              <td className="left-column">Nation</td>
              <td className="right-column">{this.props.nation[0]}</td>
              <td className="right-column">{this.props.nation[this.props.nation.length-1]}</td>
              <td className="right-column">{(this.props.nation[this.props.nation.length-1] - this.props.nation[0])}</td>
              <td className="right-column">{((1 - (this.props.nation[this.props.nation.length-1] / this.props.nation[0])) * -100).toFixed(1)}%</td>
            </tr>
      );
    }
  }

  export default NationalTablebody;
