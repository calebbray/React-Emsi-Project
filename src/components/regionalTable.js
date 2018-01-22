import React, { Component } from 'react';
import RegionalTopRow from './regionalTopRow';
import RegionalTableBody from './regionalTableBody';
import StateTableBody from './stateTableBody';
import NationalTableBody from './nationalTableBody'

class RegionalTable extends Component {

    render() {

        return (
            <div>
                <table width="100%">
                   <RegionalTopRow />
                   <tbody>
                        <RegionalTableBody regional={this.props.regions}/>
                        <StateTableBody states={this.props.states}/>
                        <NationalTableBody nation={this.props.nation}/>
                   </tbody>
                </table>
            </div>
      );
    }
  }

  export default RegionalTable;
