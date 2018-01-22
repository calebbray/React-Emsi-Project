import React, { Component } from 'react';

class Tablebody extends Component {
    render() {
        return (
            <tr>
              <td className="left-column">{this.props.industry.title}</td>
              <td className="right-column">{this.props.industry.in_occupation_jobs}</td>
              <td className="right-column">{this.props.industry.jobs}</td>
              <td className="right-column">{this.props.industry.jobs}</td>
            </tr>
      );
    }
  }

  export default Tablebody;
