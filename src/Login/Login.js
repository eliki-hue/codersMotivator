import axios from 'axios';
import React,{useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { HashLink as Link } from 'react-router-hash-link';
// import {login} from '../actions/auth'
import './loginPage.css'
// import {useNavigate} from "react-router-dom"


const initialState = {
    username : '',
    
    password:'',

}

function LoginRegister(){

    const [loginData, setLoginData] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submiting .......")
        try {
            const response = await axios.post("http://127.0.0.1:8000/authentication/login", loginData)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        
    }
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const handleSubmit =async (e)=>{
        // e.preventDefault()
        // dispatch(login(loginData))
        // setTimeout(function() {
            
        //     const userId =localStorage.getItem('userId')
        // const userRole =  localStorage.getItem('userRole')
        // if (userId && userRole === "Customer") {
        //     console.log('tested')
        //     navigate('/buses')
        // }
        // else if(userId && userRole === "Driver") {
        //     console.log('tested')
        //     navigate('/')}

        //     }, 3000);
        

        // // console.log('userid',userId)
        // // if (userId){
            
        // //     navigate('/buses')
        // // }
        
        // // console.log(data.data.User_role)
        
        // //     // navigate('/buses')
        // //     // this.history.push("/buses");
        // //     console.log("passed")
        // //     console.log(data)
        // //     // <Route exact path="/">
        // //     //  <Navigate to="/buses" /> : <BusList />
        // //     // </Route>
        // //     // return <Navigate to={{ pathname: '/buses'}} />
        // // }
        // // else{
        // //     console.log("failed")
        // // }
        // // if (roles && roles.indexOf(currentUser.role) === -1) {
        // //     // role not authorised so redirect to home page
        // //     return <Redirect to={{ pathname: '/'}} />
        // // }
        // console.log(loginData)
    // } 
    return(
        <div className="back">
            <div className="div-center">
                <div className="content">
                    <h3 className='text-center'>Login</h3>
                    <hr />
                    <form onSubmit={handleSubmit} type="post">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input className="form-control" type="text" name="username" onChange={(e)=>setLoginData({...loginData, [e.target.name]:e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" onChange={(e)=>setLoginData({...loginData, [e.target.name]:e.target.value})} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <hr />
                        <button type="button" className="btn btn-link">Signup</button>
                        <button type="button" className="btn btn-link">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>

    )
 }

export default LoginRegister;