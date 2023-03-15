import React from "react";
import { useState } from "react";

import "./Dashboard.css";
import homeIcon from "../images/home.png";
import pic from "../images/girl.jpeg";

function Dashboard() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mary",
      phone: "098655",
      email: "123@gmail.com",
      role: "staff",
      post: 334,
      pic: pic,
    },
]);

  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    role: "",
    post: "",
    pic: "",
  });

  const handleAddUser = (event) => {
    event.preventDefault();
    const newId = users.length + 1;
    const newUserWithId = { ...newUser, id: newId };
    setUsers([...users, newUserWithId]);
    setNewUser({
      id: "",
      name: "",
      phone: "",
      email: "",
      role: "",
      post: "",
      pic: "",
    });
    console.log("User added");
  };

  const handleRemoveUser = (userId) => {
    // Filter out the user with the given userId
    const updatedUsers = users.filter (user.id == userId);
    // Update the state or list of users with the updatedUsers array
    setUsers(updatedUsers);
    console.log(updatedUsers)
    console.log("User removed");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" style={{ background: "blue" }}>
            <p><button>Add User</button></p>
            <button onClick={handleAddUser}>Add User</button>
            <p><button>Add Category</button></p>
            <button onClick={() => console.log("Add Category button clicked")}>Add Category</button>

           
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
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Post</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                      <tr>
                        <th scope="row"></th>
                        <td>
                          <img src={pic} />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.post}</td>
                        {/* <td><button>Remove</button></td> */}
                        {/* <td><button onClick={() => console.log("Remove button clicked")}>Remove</button></td> */}
                       <td><button onClick={() => handleRemoveUser(user.id)}>Remove</button></td> 


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