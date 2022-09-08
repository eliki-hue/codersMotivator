import React from "react";
function Footer() {
    return (
      <div>
          <div className='container-fluid' style={{color:"white", background:"blue"}}>
              <div className='row'>
                  <div className='col-sm-4'>
                      <h2>Subscribe to our Newsletter</h2>
                      <input placeholder='Email Address'></input>
  
                  </div>
                  <div className='col-sm-4'>
                      <h2>Quick Links</h2>
                      <p></p>
                      <p>About Us</p>
                    <p>Admin</p>
                    <p>Staff</p>
                    <p>Students</p>
                    <p>Signup</p>
                    <p>Logout</p>

                </div>
                <div className='col-sm-4' style={{justify:"left"}}>
                    <h2>Contact Us</h2>
                    <p>Hillside House, 4th Floor</p>
                    <p>Westlands, Nairobi</p>
                    <p>P.O. Box 234-01000</p>
                    <p>Nairobi, Kenya</p>
                    <p>Email:</p>
                    <p>developers@students.motivation.com</p>
                    <p>Reach us on Social Media</p>
                    <p>social icons ................</p>

                </div>

            </div>
            <div className='row'>
            <p>Admin</p>
            <p> 2022</p>
            <p>All rights reserved</p>

            </div>

        </div>
    </div>
  )
}

export default Footer;