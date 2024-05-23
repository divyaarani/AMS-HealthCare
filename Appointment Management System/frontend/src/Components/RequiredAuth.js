import React from 'react'

export default function RequiredAuth(props) {
    const auth=useAuth()
    if(auth.user){
        return(<>{props.children}</>)
    }
    else{
        return
        <Navigate to='/login'/>
    }
}
