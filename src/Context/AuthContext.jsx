import React, { useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated]= useState(false)
    const [user,setUser] = useState(null)

    const login = (username,password) => {
        if(!username && !password) {
            return false
        }
        setIsAuthenticated(true)
        setUser(username)
        // localStorage
    }
    const logout = () => {
        setIsAuthenticated(false)
        setUser(null)
        // localStorage
    }

    const value = {isAuthenticated,user,login,logout}
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;