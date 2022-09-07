import "./NewPost.css";
import React, { useState } from "react";
// import { useDispatch } from 'react-redux';

// import {registerDriver} from '../actions/auth'
// import {useNavigate} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

const initialState = {
  username: "",
  email: "",
  password1: "",
  password2: "",
};

function NewPost() {
  // let navigate =useNavigate();

  const [postData, setPostData] = useState(initialState)
  // const dispatch = useDispatch()
  // const handleSubmit = (e)=>{
  //     e.preventDefault()
  //     dispatch(registerDriver(postData))
  //     console.log(postData)

  // }
  const [imgfile, uploadimg] = useState([])
  	console.log("Image FIles",imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }

  return (
    <div className="container-fluid">
      <div className="signup">
        <form onSubmit={""} type="post">
          <h3>NewPost</h3>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Full-stack</option>
              <option>Backend</option>
              <option>Frontend</option>
              <option>Machine Learning</option>
              <option>Artificial Interrigence</option>
            </select>
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              onChange={(e)=>setPostData({...postData, [e.target.name]:e.target.value})}
            />
          </div>
          <div>
        <center>
          <h2>Upload</h2>
          <input type="file" onChange={imgFilehandler} />
          <hr />
          <h2>Preview</h2>
          {imgfile.map((elem) => {
            
            return <>
              <span key={elem}>
                <img src={elem} height="200" width="200" alt="med1" />
              </span>
            </>
          })}
        </center>
      </div>
          <div className="inputs">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password1"
              onChange={(e)=>setPostData({...postData, [e.target.name]:e.target.value})}
            />
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              name="password2"
              onChange={(e)=>setPostData({...postData, [e.target.name]:e.target.value})}
            />
          </div>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
          <p className="forgot-password text-right">
            Already have an account? <Link to='/login'>login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default NewPost;
