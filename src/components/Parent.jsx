import React from 'react'

const Parent = ({children}) => {
  console.log(children)
  return (
   <>
    <h1>parent</h1>
    <div>{children}</div>
   </>
  )
}

export default Parent