import { register } from "../API/api";
import {useNavigate } from "react-router-dom"
import { Route, Navigate} from 'react-router-dom';

import React from 'react'

export const registration = (user) =>async(dispatch)=> {
  try {
        const data = await register.registration(user)
        console.log(data)
        console.log(data.status)
  } catch (error) {
    console.log(error)
    
  }
}
export const Post = (user) =>async(dispatch)=> {
  try {
        const data = await register.NewPost(user)
        console.log(data)
        console.log(data.status)
  } catch (error) {
    console.log(error)
    
  }
}


const auth = () => {
  return (
    <div>auth</div>
  )

  
}

export default auth
