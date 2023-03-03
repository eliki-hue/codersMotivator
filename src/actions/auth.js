import * as api from '../api/index'
import {useNavigate } from "react-router-dom"
import { Route, Navigate} from 'react-router-dom';

import React from 'react'

export const registration = (user) =>async(dispatch)=> {
  try {
        const data = await api.registration(user)
        console.log(data)
        console.log(data.status)
  } catch (error) {
    console.log(error)
    
  }
}

import React from 'react'

const auth = () => {
  return (
    <div>auth</div>
  )
}

export default auth