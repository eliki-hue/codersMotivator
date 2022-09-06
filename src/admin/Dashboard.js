import React from "react";
import "./Dashboard.css";
import homeIcon from "../images/home-icon.png";
import pic from "../images/sitting.jpeg";

function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" style={{ background: "blue" }}>
            <p>dfghjk</p>
            <p>dfghjk</p>
            <p>dfghjk</p>
          </div>
          <div className="col-md-10" style={{ background: "" }}>
            <div className="container">
              <div className="row">
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "3rem", margin: "0.5rem" }}
                    src={homeIcon}
                  />
                  <h2 style={{ width: "3rem", margin: "0.5rem" }}>Dashboard</h2>
                </div>
              </div>
              <div className="row dash-card-row">
                <div className="dash-card-1">
                  <p>1234567</p>
                  <p>fghjhkjdghdhdhjdjdj</p>
                </div>
                <div className="dash-card-2">
                  <p>fghjhkjdghdhdhjdjdj</p>
                  <p>fghjhkjdghdhdhjdjdj</p>
                </div>
                <div className="dash-card-3">
                  <p>fghjhkjdghdhdhjdjdj</p>
                  <p>fghjhkjdghdhdhjdjdj</p>
                </div>
              </div>
              <div className="row dash-bar-row">
                <div className="col-md-8">
                <div className="dash-bar-graph">
                    <p>fghjhkjdghdhdhjdjdj</p>
                    <p>fghjhkjdghdhdhjdjdj</p>
                  </div>
                </div>
                <div className="col-md-4" >
                  <div className="dash-pie-chart">
                    <p>fghjhkjdghdhdhjdjdj</p>
                    <p>fghjhkjdghdhdhjdjdj</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="users-list">
                  <h1>School Staffs</h1>
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">user pic</th>
                        <th scope="col">user Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Post</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <td>
                          <img src={pic} />
                        </td>
                        <td>Mary</td>
                        <td>098655</td>
                        <td>123@gmail.com</td>
                        <td>staff</td>
                        <td>334</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
