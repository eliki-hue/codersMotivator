import React from "react";

function Content() {
  return (
    <div>
      <div className="container">
        <div className="row" style={{display:"flex"}}>
          <div
            className="col-sm-2"
            style={{ background: "green", Height:"100%"}}
          >
           <div> 
            <p>Name</p>
            <p>Bio</p>
            <p>Email</p>
            <p>Contact</p>

            </div>
          </div>
          <div className="col-sm-8" style={{ background: "blunne",position:"" }}>
            <h2>heading</h2>
            
          </div>
          <div
            className="col-sm-2"
            style={{ position: "sticky", background: "green" }}
          >
            <h4>Categories</h4>
            <button>DevOps</button><br/>
            <button>Full-Stack</button><br/>
            <button>Backend</button><br/>
            <button>Front-end</button><br/>
            <button>Machine Learning</button><br/>
            <button>Artificial Intelligence</button><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;