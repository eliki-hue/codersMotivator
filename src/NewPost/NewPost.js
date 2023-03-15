import "./NewPost.css";
import React, { useState } from "react";
import Videoupload from "./Videoupload";
// import { useDispatch } from 'react-redux';

// import {registerDriver} from '../actions/auth'
// import {useNavigate} from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";

const initialState = {
  category: "1",
  title: "",
  image: "",
  video: "",
  author: 3,
  
};

function NewPost() {
  // let navigate =useNavigate();

  const [postData, setPostData] = useState(initialState);
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        const response =await axios.post("http://127.0.0.1:8000/api/post/",postData)
        console.log (response)
    } catch (error) {
        console.error(error)
    }
}
  // const dispatch = useDispatch()
  // const handleSubmit = (e)=>{
  //     e.preventDefault()
  //     dispatch(registerDriver(postData))
  //     console.log(postData)

  // }
  const [imgfile, uploadimg] = useState([]);
  console.log("Image FIles", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  return (
    <div className="container-fluid">
      <div className="signup">
        <form onSubmit={handleSubmit} type="post">
          <h3>NewPost</h3>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Category</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Full-stack</option>
              <option>Backend</option>
              <option>Frontend</option>
              <option>Machine Learning</option>
              <option>Artificial Intelligence</option>
            </select>
          </div>
          <div className="inputs">
            <label></label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              onChange={(e) =>
                setPostData({ ...postData, [e.target.name]: e.target.value })
              }
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

          <h1>Video upload</h1>
          <Videoupload width={400} height={300} />

          <div className="inputs">
            <label></label>
            <input
              type="textarea"
              className="form-control"
              placeholder="Text"
              name="content"
              onChange={(e) =>
                setPostData({ ...postData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
          <p className="forgot-password text-right">
            {/* Already have an account? <Link to=''>login</Link> */}
          </p>
        </form>
      </div>
    </div>
  );
}
export default NewPost;
