import "./Register.css";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {registration} from '../actions/auth'
import { register } from "../API/api";
import {useNavigate} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

const initialState = {
  username: "",
  email: "",
  password1: "",
  password2: "",
};

function Register() {
  let navigate =useNavigate();

  const [userData, setUserData] = useState(initialState)
  // const dispatch = useDispatch()
  const handleSubmit = (e)=>{
      e.preventDefault()

      // dispatch(registration(userData))
      axios.post("http://127.0.0.1:8000/registration", userData, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error, "not successful");
      });

      console.log(userData)

  }

  // function registerUser(username, password) {
  //   const data = { username, password };
  //   axios.post('/api/register', data)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  return (
    <div className="container-fluid">
      <div className="signup">
        <form onSubmit={handleSubmit} type="post">
          <h3>Register</h3>
          <div class="form-group">
            <label for="exampleFormControlSelect1">You are?</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Student</option>
              <option>Staff</option>
            </select>
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              name="username"
              onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
            />
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="Email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
            />
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password1"
              onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
            />
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              name="password2"
              onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
            />
          </div>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
          <p className="forgot-password text-right">
            {/* Already have an account? <Link to='/login'>login</Link> */}
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
