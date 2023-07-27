import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {user} = useParams()
    console.log(user)
  return (
    <div>{user}</div>
  )
}

export default User