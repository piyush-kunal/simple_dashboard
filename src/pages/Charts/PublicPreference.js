import React from 'react';
import ReactChartist from 'react-chartist';
import Chartist from 'chartist';

const dataPreferences = {
  labels: ['30%', '32%', '15%', '17%','6%'],
  series: [30, 32, 15, 17, 6]
};

const optionsPreferences = {
  donut: true,
  donutWidth: 40,
  startAngle: 0,
  height: "245px",
  total: 100,
  showLabel: false,
  axisX: {
    showGrid: false,
    offset: 0
  },
  axisY: {
    offset: 0
  }
};

const PublicPreference = () => (
  <div className="card">
    <div className="header">
      <h4>Public Preferences</h4>
      <p className="category">Pie Chart</p>
    </div>
    <div className="content">
      <ReactChartist data={dataPreferences} options={optionsPreferences} type="Pie" className="ct-chart" />
    </div>
    <div className="footer">
      <h6>Legend</h6>
      <i className="fa fa-circle text-info"></i> Apple
      <i className="fa fa-circle text-warning"></i> Samsung
      <i className="fa fa-circle text-danger"></i> Windows Phone
      <i className="fa fa-circle text-info"></i> moto
      <i className="fa fa-circle text-warning"></i> mi
    </div>
  </div>
);

export default PublicPreference;