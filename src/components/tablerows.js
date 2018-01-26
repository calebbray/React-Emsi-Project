import React, { Component } from 'react';

class Tablebody extends Component {
    render() {
        return (
            <tr>
              <td className="left-column">{this.props.industry.title}</td>
              <td className="right-column">{this.props.industry.in_occupation_jobs}</td>
              <td className="right-column">{((this.props.industry.in_occupation_jobs)/(this.props.employing_industry_jobs) * 100).toFixed(1)}%</td>
              <td className="right-column">{((this.props.industry.in_occupation_jobs) / (this.props.industry.jobs) * 100).toFixed(1)}%</td>
            </tr>
      );
    }
  }

  export default Tablebody;
