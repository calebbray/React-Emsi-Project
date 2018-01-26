import React, { Component } from 'react';

class RegionalTopRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: 2013,
            endYear: 2018
        }
    }

    render() {
        return (
            <thead>
                <tr>
                    <th className="left-column">Region</th>
                    <th className="right-column">{this.state.startYear} Jobs</th>
                    <th className="right-column">{this.state.endYear-1} Jobs</th>
                    <th className="right-column">Change</th>
                    <th className="right-column">%Change</th>
                </tr>
            </thead>
      );
    }
  }

  export default RegionalTopRow;
