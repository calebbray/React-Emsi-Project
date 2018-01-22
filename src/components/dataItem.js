import React, { Component } from 'react';

class DataItem extends Component {
    render() {
      return (
            <div>
                <p>{this.props.regionalJobs.regional}</p>
                <p>Jobs ({this.props.summaryYear.year})</p>
                <p>{this.props.statement}% <span id="percent">above</span> National Average</p>
            </div>
      );
    }
  }

  export default DataItem;
