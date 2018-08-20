import React from 'react';
import EmailChart from './EmailChart';
import CPUChart from './CPUChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';
import OracleStatChart from './OracleStatChart';
import SasStatChart from './SasStatChart';
import Tasks from './Tasks';

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <OracleStatChart />
        </div>
        <div className="col-md-4">
          <SasStatChart />
        </div>
        <div className="col-md-4">
          <EmailChart />
        </div>
        <div className="col-md-4">
          <CPUChart />
        </div>
        {/* <div className="col-md-8">
          <SalesChart />
        </div> */}
      </div>
      <div className="row">
        {/* <div className="col-md-6">
          <UserBehaviorChart />
        </div> */}
        {/* <div className="col-md-6">
          <Tasks />
        </div> */}
      </div>

    </div>
  </div>
);

export default Dashboard;