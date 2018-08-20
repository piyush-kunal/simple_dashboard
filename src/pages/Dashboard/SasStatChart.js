import React from 'react';
import ChartistGraph from 'react-chartist';


// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const SasStatChart = () => {

  let dataPreferences = {
    labels: ['62%', '38%'],
    series: [72, 28]
  };

  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };

  let chartType = 'Pie';

  return (

    <div className="card">
      <div className="header">
        <h4 className="title">SAS Statistics</h4>
        <p className="category">Today Performance</p>
      </div>
      <div className="content">

        <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />


      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Free Space in TB
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Used Space in TB
          </div>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-clock-o"></i> Last update 2 hours ago
          </div>
      </div>
    </div>

  );
};

export default SasStatChart;