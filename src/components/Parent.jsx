import React from 'react'

const Parent = ({username='admin',email="admin@gmail.com"}) => {
  return (
   <>
    <h1>username : {username} </h1>
    <h1>email : {email}</h1>
   </>
  )
}

export default Parent