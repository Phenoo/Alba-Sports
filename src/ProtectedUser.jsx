import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const ProtectedUser = ({children}) => {
  let {currentUser} =  useAuth();
  if(!currentUser){
    return<Navigate to="/user" />
  }
  return children
}

export default ProtectedUser