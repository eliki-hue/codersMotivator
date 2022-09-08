import React from "react"
import headerimage from "../images/desktop.jpeg"
function Header() {
    return (
        <div className='container-fluid'>
            <h1> motivation</h1>
            <img src={headerimage}/>

        </div>
    )
    
}
export default Header;