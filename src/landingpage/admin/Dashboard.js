import React from 'react'
import homeIcon from "../../images/home-icon.png"

function Dashboard() {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-10'>
                    <div className='row'>
                        <div><img src={homeIcon}/>
                        <h2>Dashboard</h2></div>
                    </div>
                    <div className='row'>
                        <div className='dash-card-1'>
                            <p>fghjhkjdghdhdhjdjdj</p>
                            <p>fghjhkjdghdhdhjdjdj</p>
                        </div>
                        <div className='dash-card-2'>
                            <p>fghjhkjdghdhdhjdjdj</p>
                            <p>fghjhkjdghdhdhjdjdj</p>
                        </div>
                        <div className='dash-card-3'>
                            <p>fghjhkjdghdhdhjdjdj</p>
                            <p>fghjhkjdghdhdhjdjdj</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='dash-bar-graph'>
                            <p>fghjhkjdghdhdhjdjdj</p>
                            <p>fghjhkjdghdhdhjdjdj</p>
                        </div>
                        <div className='dash-pie-chart'>
                            <p>fghjhkjdghdhdhjdjdj</p>
                            <p>fghjhkjdghdhdhjdjdj</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='users-list'>
                            

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Dashboard