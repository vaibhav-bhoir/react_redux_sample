import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const user  = useSelector((state) => state.user)
    return (
        <header>
            <div>
                <h1>header</h1>
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
            </div>
        </header>
    )
}

export default Header