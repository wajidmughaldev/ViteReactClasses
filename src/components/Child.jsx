import React from 'react'

const Child = () => {

  function handleClick(username) {
    console.log(`Hello ${username}`)
  }
  return (
    <>
    <input type="text" onChange={(x)=>console.log(x.target.value)}/>
    <button onClick={()=>handleClick("admin")}>Child</button>
    </>
  )
}

export default Child