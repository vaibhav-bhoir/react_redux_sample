import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const user  = useSelector((state) => state.user)

  return (
    <footer>
        <div>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
        <h1>footer</h1>
        </div>
    </footer>
  )
}

export default Footer