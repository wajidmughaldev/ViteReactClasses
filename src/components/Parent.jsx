import React from 'react'
import Child from './Child'
const Parent = (props) => {

  return (
    <Child userData={props.userData}/>
  )
}

export default Parent


