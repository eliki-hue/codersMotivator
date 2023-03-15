import React from "react";
import "./Dashboard.css";
import homeIcon from "../images/home-icon.png";
import pic from "../images/sitting.jpeg";
import { useState ,useEffect} from "react";

function Dashboard() {
  const [Users,setUserData]=useState([])
  React.useEffect(() => {
    getUserUpdate();
  }, []);
  let getUserUpdate = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/authentication/all_users/"
    );
    let data = await response.json();
    setUserData(data);
    console.log(data)
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" style={{ background: "blue" }}>
            <p><button>Add User</button></p>
            <p><button>Add Category</button></p>
           
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
                  <p>New requests: 1234</p>
                  <p>New Posts: 1234</p>
                  
                </div>
                <div className="dash-card-2">
                <p>No. of Staff: 23</p>
                </div>
                <div className="dash-card-3">
                <p>No. of Students: 23</p>
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
                  <h1>Users</h1>
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">user pic</th>
                        <th scope="col">user Name</th>
                        <th scope="col">Bio</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Post</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                    {Users.map((user, index) => (
                      <tr>
                        <th scope="row"></th>
                        <td>
                          <img src={pic} />
                        </td>
                        <td>{user.username}</td>
                        <td>{user.bio}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>334</td>
                        <td><button>Remove</button></td>
          
                      </tr>
                    ))}
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
