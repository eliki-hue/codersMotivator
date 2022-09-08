import React from 'react'
import aboutimg from "../images/girl.jpeg"

function About() {
  return (
    <div>
        <div className='container'>
        <div className='row'><h2>what our user say about us</h2></div>
            <div className='row'>
            <div className='col-sm-2'></div>
                <div className='col-sm-2'>
                    <img src={aboutimg}/>
                </div>
                <div className='col-sm-6'>
                    <h3>Eliki</h3>
                    <p>Full-stack Developer</p><br/>
                    <p>dfghjklhdvffffff</p>

                </div>
                <div className='col-sm-2'></div>

            </div>

        </div>
    </div>
  )
}

export default About
