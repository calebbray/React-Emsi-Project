import React, { Component } from 'react';
import Tablebody from './tablerows';
import TopRow from './topRow'

class GrowthTable extends Component {

    render() {
        let headerItems;
        if (this.props.industries) {
            headerItems = this.props.industries.map(industry => {
                return (
                        <Tablebody key={industry.title} industry={industry}/>
                )
            })
        }
        return (
            <div>
                <table width="100%">
                    <TopRow />
                    <tbody>
                        {headerItems}
                    </tbody>
                </table>
            </div>
      );
    }
  }

  export default GrowthTable;
