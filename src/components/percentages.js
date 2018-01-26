import React, { Component } from 'react';

class Percentages extends Component {
    render() {
      return (
            <div>
                <p>+{this.props.regionalChange}%</p>
                <p>% Change ({this.props.yearlyRange.start_year}-{this.props.yearlyRange.end_year - 1})</p>
                <p>Nation: +{this.props.nationalChange}%</p>
            </div>
      );
    }
  }

  export default Percentages;
