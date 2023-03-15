import axios from 'axios';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import {login} from '../actions/auth'
import './loginPage.css'
import {useNavigate} from "react-router-dom"
import axios from "axios";


const initialState = {
    username : '',
    
    password:'',

}

function LoginRegister(){
<<<<<<< HEAD

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
=======
    let navigate =useNavigate();
    const [loginData, setLoginData]=useState(initialState)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response =await axios.post("http://127.0.0.1:8000/authentication/login",loginData)
            console.log (response)
            navigate('/postdisplay')
        } catch (error) {
            console.error(error)
        }
    }
>>>>>>> eabb5ef53cab4ab92d884ea5e32ad5dea3a6c758
            
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
<<<<<<< HEAD
=======
                        {/* <button type="button" className="btn btn-link" onclick="alert('Button clicked!')">Signup</button> */}

>>>>>>> eabb5ef53cab4ab92d884ea5e32ad5dea3a6c758
                        <button type="button" className="btn btn-link">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>

    )
 }

export default LoginRegister;