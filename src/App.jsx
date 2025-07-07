import React from 'react'
import Parent from './components/Parent'
import Child from './components/Child'
const App = () => {
  function handleClick() {
    console.log('Button clicked')
  }
  return (
    <>
        <Child clickHandler={handleClick}/>
    </>
  )
}

export default App