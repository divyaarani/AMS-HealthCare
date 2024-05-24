import React, { useContext, useState } from 'react'
const AuthContext=React.createContext()

export default function AuthProvider(props) {
    const[user,setUser]=useState(null)
    const login=(usr)=>{
        setUser(usr)
    }
    const logout=()=>{
        setUser(null)
    }
  return (
    <div>
      <AuthContext.Provider value={{user,login,logout}}>{props.children}</AuthContext.Provider>
    </div>
  )
}
export const useAuth=()=>{
    return useContext(AuthProvider )
}
