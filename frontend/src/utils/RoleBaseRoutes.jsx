import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children, requiredRole}) => {
    const {user, loading} = useAuth()
    console.log(user)
    if(loading){
      return <div>Loading ....</div>
    }
    console.log(user)
    if(!requiredRole.includes(user.role)){
        <Navigate to="/unauthorized" />
    }

    return user ? children : <Navigate to="/login" />
}

export default RoleBaseRoutes