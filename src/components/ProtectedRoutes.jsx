import React from 'react'
import { useContext } from 'react'
import {AuthContext} from "../Context/AuthContext"
import { Navigate } from 'react-router-dom'


const ProtectedRoutes = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext)
    if(isAuthenticated) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
}
export default ProtectedRoutes;