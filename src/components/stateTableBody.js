import React, { Component } from 'react';

class StateTablebody extends Component {
    render() {
        return (
            <tr>
              <td className="left-column">State</td>
              <td className="right-column">{this.props.states[0]}</td>
              <td className="right-column">{this.props.states[this.props.states.length-2]}</td>
              <td className="right-column">{(this.props.states[this.props.states.length-2] - this.props.states[0])}</td>
              <td className="right-column">{((1 - (this.props.states[this.props.states.length-2] / this.props.states[0])) * -100).toFixed(1)}%</td>
            </tr>
      );
    }
  }
  
  export default StateTablebody;