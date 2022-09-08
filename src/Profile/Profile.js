import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { HashLink as Link } from 'react-router-hash-link';
// import {login} from '../actions/auth'
// import './loginPage.css'
// import {useNavigate} from "react-router-dom"
import Profileimg from "../images/girl.jpeg"
import "./profile.css"

const initialState = {
  username: "",

  password: "",
};

function Profile() {
  const [ProfileData, setProfileData] = useState(initialState);
  const [imgfile, uploadimg] = useState([]);
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const handleSubmit =async (e)=>{
  //     e.preventDefault()
  //     dispatch(login(loginData))
  //     setTimeout(function() {

  //         const userId =localStorage.getItem('userId')
  //     const userRole =  localStorage.getItem('userRole')
  //     if (userId && userRole === "Customer") {
  //         console.log('tested')
  //         navigate('/buses')
  //     }
  //     else if(userId && userRole === "Driver") {
  //         console.log('tested')
  //         navigate('/')}

  //         }, 3000);

  // console.log('userid',userId)
  // if (userId){

  //     navigate('/buses')
  // }

  // console.log(data.data.User_role)

  //     // navigate('/buses')
  //     // this.history.push("/buses");
  //     console.log("passed")
  //     console.log(data)
  //     // <Route exact path="/">
  //     //  <Navigate to="/buses" /> : <BusList />
  //     // </Route>
  //     // return <Navigate to={{ pathname: '/buses'}} />
  // }
  // else{
  //     console.log("failed")
  // }
  // if (roles && roles.indexOf(currentUser.role) === -1) {
  //     // role not authorised so redirect to home page
  //     return <Redirect to={{ pathname: '/'}} />
  // }
  //     console.log(profileData)
  // }
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return (
    <div> 
       
    <div class="back-profile">
      <div class="div-center-profile">
        <div class="content-profile">
        <div className= "row profile" >
            <div className="col profile-current" >
            <div className="Profileimage">
                <img src={Profileimg}/>

            </div>
            <br/>
            <div>
                <h3>Name:username</h3>

            </div>
            <br/>
            <div>
                <h4>ContactInfo: #678</h4>
            </div>
            <br/>
            <div>
                <h4>Bio: ghjkjkvkjhk</h4>
            </div>
            <br/>
            </div>
            <div className="col profile-form" >
            <h3 className="text-center">Update Profile form</h3>
            <form onSubmit={""} type="post">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                class="form-control"
                type="text"
                name="username"
                onChange={(e) =>
                  setProfileData({
                    ...ProfileData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contact Info</label>
              <input
                type="password"
                name="password"
                class="form-control"
                onChange={(e) =>
                  setProfileData({
                    ...ProfileData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Admin Bio</label>
              <input
                class="form-control"
                type="text"
                name="username"
                onChange={(e) =>
                  setProfileData({
                    ...ProfileData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <center>
                <h2>Upload</h2>
                <input type="file" onChange={imgFilehandler} />
                <hr />
                <h2>Preview</h2>
                {imgfile.map((elem) => {
                  return (
                    <>
                      <span key={elem}>
                        <img src={elem} height="200" width="200" alt="med1" />
                      </span>
                    </>
                  );
                })}
              </center>
            </div>
            <button type="submit" class="btn btn-secondary">
              Save profile changes
            </button>
            <hr />
          </form>

            </div>

        </div>
          
          <hr />

        </div>
      </div>
    </div>

    </div>
  );
}

export default Profile;
