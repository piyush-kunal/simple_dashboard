import React from 'react';
import PerformanceChart from './PerformanceChart';
import Nasdaq from './Nasdaq';
import PublicPreference from './PublicPreference';
import UserBehavior from './UserBehavior';
import RWUtilization from './RWUtilization';

const Charts = () => (
  <div className="content">
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-6">
          <UserBehavior />
        </div>
        <div className="col-md-6">
          <RWUtilization />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <PublicPreference />
        </div>
        <div className="col-md-6">
          <PerformanceChart />
        </div>
        <div className="col-md-6">
          <Nasdaq />
        </div>
      </div>
      
    </div>
  </div>
);

export default Charts;