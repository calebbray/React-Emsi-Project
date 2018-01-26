import React, { Component } from 'react';

class TopRow extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th className="left-column">Industry</th>
                    <th className="right-column">Occupation Jobs<br/>in industry<br/>({this.props.targetYear})</th>
                    <th className="right-column">% of occupation<br/>in industry<br/>({this.props.targetYear})</th>
                    <th className="right-column">% of Total<br/>Jobs in<br/>industry<br/>({this.props.targetYear})</th>
                </tr>
            </thead>
      );
    }
  }

  export default TopRow;
