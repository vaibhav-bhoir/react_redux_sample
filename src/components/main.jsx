import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {

    const user  = useSelector((state) => state.user)

  return (
    <div className="main">
        <h1>Main content</h1>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolorum explicabo alias! Fugiat cum earum doloribus aut incidunt? Rem labore alias nostrum qui earum. Error vel maxime esse dolor beatae autem pariatur culpa quaerat, cumque expedita temporibus at ipsum? Neque nostrum, voluptas repellat saepe possimus labore autem iure dolor esse.</p>
    </div>
  )
}

export default Main