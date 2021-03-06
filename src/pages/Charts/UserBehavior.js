import React from 'react';
import Chart from 'react-chartist';

let data = {
  labels: ['18 June', '19 June', '20 June', '21 June', '22 June'],
  series: [
    [1217, 1026, 1024, 1026, 1123],
    [412, 243, 280, 580, 453]
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

const UserBehaviorChart = () => (
  <div className="card ">
    <div className="header">
      <h4>Max RAM Utilization Per Day Graph</h4>
      <p className="category">Bar Chart</p>
    </div>
    <div className="content">
      <Chart data={data} options={options} responsiveOptions={responsiveOptions} type="Bar" className="ct-chart" />
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> RAM
          </div>
          <div className="item">
          <i className="fa fa-circle text-danger"></i> SWAP
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

export default UserBehaviorChart;