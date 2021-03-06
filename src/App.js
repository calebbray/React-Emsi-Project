import React, { Component } from 'react';
import './App.css';
import Summary from './components/occupation-summary';
import GrowthTable from './components/growthTable';
import RegionalTable from './components/regionalTable';
import Chart from './components/graph';


class App extends Component {
  constructor() {
    super();
    this.state = {
      summary: {},
      jobsGrowth: {},
      tableheaders: [],
      industries: [],
      regional: [],
      states: [],
      national: [],
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33')
      .then(res => res.json())
      .then(d => {

        let regionalValues = d.trend_comparison.regional;
        let stateValues = d.trend_comparison.state;
        let nationalValues= d.trend_comparison.nation;
        let regional = [], state = [], national = [], years = [];

        let storeGraphValues = (a, areaType, length) => {
          let i;
          for (i = length - 1; i >= 0; i--) {
            if (areaType === 'r') {
              a[i] = (1 - (regionalValues[i] / regionalValues[0])) * -100;
            } else if (areaType === 's') {
              a[i] = (1 - (stateValues[i] / stateValues[0])) * -100;
            } else if (areaType === 'n') {
              a[i] = (1 - (nationalValues[i] / nationalValues[0])) * -100;
            }
          }
          return a;
        }

        let getYears = (start, end, a) => {
          let i = 0;
          while (start <= end) {
            a[i] = start;
            i++;
            start++;
          }
          return a;
        }

        storeGraphValues(regional, 'r', regionalValues.length);
        storeGraphValues(state, 's', stateValues.length);
        storeGraphValues(national, 'n', nationalValues.length);

        getYears(d.trend_comparison.start_year, d.trend_comparison.end_year - 1, years);

        this.setState({
          /******************* Top of the page ********************/
          job: d.occupation.title,
          location: d.region.title,
          /********************************************************/

          summary: d.summary.jobs,
          statement: (d.summary.jobs.regional / d.summary.jobs.national_avg * 100).toFixed(0),
          jobsGrowth: d.summary.jobs_growth,
          regionalChange: ((d.trend_comparison.regional[d.trend_comparison.regional.length - 2]/d.trend_comparison.regional[0] - 1) * 100).toFixed(1),
          industries: d.employing_industries.industries,

          regional: d.trend_comparison.regional,
          states: d.trend_comparison.state,
          national: d.trend_comparison.nation,

          nationalChange: d.summary.jobs_growth.national_avg,
          regionalRate: d.summary.earnings.regional,
          nationalRate: d.summary.earnings.national_avg,
          /******************* Chart Data *************************/
          chartData: {
            labels: years,
    
            datasets: [
              {
                label: 'Region',
                data: regional,
                fill: false,
                borderColor: '#000f71',
                lineTension: 0
              },
              {
                label: 'State',
                data: state,
                fill: false,
                borderColor: '#43a9d1',
                lineTension: 0,
                pointStyle: 'rect',
                pointRadius: 5
              },
              {
                label: 'Nation',
                data: national,
                fill: false,
                borderColor: '#c8edff',
                lineTension: 0,
                pointStyle: 'triangle',
                pointRadius: 5
              }
            ],
          },
          /********************************************************/

          /*************** Growth Table ***************************/

          employing_industries_jobs: d.employing_industries.jobs,
          targetYear: d.employing_industries.year,

          /********************************************************/

        });
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Occupation Overview</h1>
          <p>{this.state.job} in {this.state.location}</p>
        </header>
        <main>
            <p><strong>Occupation Summary for {this.state.job}</strong></p>
            <hr/>
            <Summary regionalJobs={this.state.summary} summaryYear={this.state.summary} statement={this.state.statement} regionalChange={this.state.regionalChange} yearlyRange={this.state.jobsGrowth} nationalChange={this.state.nationalChange} regionalRate={this.state.regionalRate} nationalRate={this.state.nationalRate} />
            <hr/>
            <Chart chartData={this.state.chartData}/>
            <RegionalTable regions={this.state.regional} states={this.state.states} nation={this.state.national}/>
            <p><strong>Industries Employing {this.state.job}</strong></p>
            <hr/>
            <GrowthTable industries={this.state.industries} targetYear={this.state.targetYear} employing_industries_jobs={this.state.employing_industries_jobs} />
        </main>

      </div>
    );
  }
}

export default App;
