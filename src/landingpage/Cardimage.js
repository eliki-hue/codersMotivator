import React from "react";

function Cardimage({imgsource, note}) {
  
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      <div className="card" style={{margin: '10px',width: '18rem',border:"none"}}>
        <img  style={{padding:"0.5rem"}} className="card-img-top" src={imgsource} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{note}</h5>
          <h5 className="card-title"></h5>
        </div>
      </div>
    </div>
  );
}

export default Cardimage;
