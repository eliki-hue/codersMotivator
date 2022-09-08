import React from "react";

function Cardimage({imagesource, note}) {
  
  return (
    <div style={{display:"flex", flexWrap:"wrap",textAlign:"center"}}>
      <div className="card" style={{margin: '10px',width: '18rem',border:"none"}}>
        <img  style={{padding:"0.5rem"}} className="card-img-top" src={imagesource} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{note}</h5>
          <h5 className="card-title"></h5>
        </div>
      </div>
    </div>
  );
}

export default Cardimage;