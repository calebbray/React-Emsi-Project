import React, { Component } from 'react';
import DataItem from './dataItem'
import Percentages from './percentages';
import Rates from './rates';

class Summary extends Component {
  render() {
    return (
        <div className="flex-box">
            <DataItem regionalJobs={this.props.regionalJobs} summaryYear={this.props.summaryYear} statement={this.props.statement} />
            <Percentages regionalChange={this.props.regionalChange} yearlyRange={this.props.yearlyRange} nationalChange={this.props.nationalChange} />
            <Rates regionalRate={this.props.regionalRate} nationalRate={this.props.nationalRate} />
        </div>
    );
  }
}

export default Summary;
