import React from 'react'
import { useUserStore } from '../../context/Zustand/UseUserStore'

function UserProfile2() {

    const user = useUserStore((state)=> state.user);
    const login = useUserStore((state)=> state.login);
    const logout = useUserStore((state)=> state.logout);
    
  return (
    <div>
        {user? (<div><h4>{user?.name}</h4><button onClick={logout}>Logout</button></div>): (<div><button onClick={login}>Login</button></div>)}
      
    </div>
  )
}

export default UserProfile2
