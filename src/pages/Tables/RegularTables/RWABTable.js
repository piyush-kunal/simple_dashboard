import React from 'react';

const RWABTable = ({data}) => (
  <div className="card">
    <div className="header">
      <h4 className="title">READ WRITE AREA BIFURICATION</h4>
      <p className="category">Work/Utill Area Average Utilization percentage</p>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Total Space</th>
            <th>Comsumed Space</th>
            <th>Free Space</th>
            <th>Percentage</th>
            <th>Path</th>
            <th>Area Name</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>$ {item.salary}</td>
              <td>{item.country}</td>
              <td>{item.city}</td>
            </tr>
          ))} */}
            <tr key={1}>
              <td>{1} TB</td>
              <td>{950} GB</td>
              <td>{70} GB</td>
              <td>{94}%</td>
              <td>/SAS/BIU/RW_TEAM_1</td>
              <td>DSI</td>
            </tr>
            <tr key={2}>
              <td>{1} TB</td>
              <td>{900} GB</td>
              <td>{90} GB</td>
              <td>{84}%</td>
              <td>/SAS/BIU/RW_TEAM_2</td>
              <td>DSI</td>
            </tr>
            <tr key={3}>
              <td>{1} TB</td>
              <td>{920} GB</td>
              <td>{60} GB</td>
              <td>{64}%</td>
              <td>/SAS/BIU/RW_TEAM_3</td>
              <td>DSI</td>
            </tr>
            <tr key={4}>
              <td>{1} TB</td>
              <td>{600} GB</td>
              <td>{110} GB</td>
              <td>{49}%</td>
              <td>/SAS/BIU/RW_TEAM_1</td>
              <td>DSI</td>
            </tr>
            <tr key={5}>
              <td>{1} TB</td>
              <td>{750} GB</td>
              <td>{100} GB</td>
              <td>{55}%</td>
              <td>/SAS/BIU/RW_TEAM_1</td>
              <td>DSI</td>
            </tr>
        </tbody>
      </table>

    </div>
  </div>
);

export default RWABTable;