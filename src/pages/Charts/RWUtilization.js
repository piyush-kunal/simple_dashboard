import React from 'react';
import Chart from 'react-chartist';

let data = {
  labels: ['18 June', '19 June', '20 June', '21 June', '22 June'],
  series: [
    [96, 90, 92, 99, 88],
    [99, 97, 93, 95, 96]
  ]
};

let options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};

let responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const RWUtilizationChart = () => (
  <div className="card ">
    <div className="header">
      <h4>Read Write Utilization Graph</h4>
      <p className="category">DSI Bar Chart</p>
    </div>
    <div className="content">
      <Chart data={data} options={options} responsiveOptions={responsiveOptions} type="Bar" className="ct-chart" />
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> TEAM 1
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> TEAM 2
          </div> 
          </div>
        <hr />
        <div className="stats">
          <i className="fa fa-check"></i> Data information certified
          </div>
      </div>
    </div>
  </div>
);

export default RWUtilizationChart;