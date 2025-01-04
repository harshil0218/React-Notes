import React from 'react'
import UserContext from './UserContext.js'
import { useState } from 'react'

const UserContextProvider = ({children}) => {

    const [user,setUser] = useState(null)
    return (
        // wrapping the children in a provider and passing the user object as well as setter function
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider