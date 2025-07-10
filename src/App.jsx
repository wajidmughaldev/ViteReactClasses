import React from 'react'
import{useState} from 'react'
import Child from './components/Child'


const App = () => {
  
  const [isTasks, setIsTasks] = useState([])
  const [isVal, setIsVal] = useState('')
  const formHandler = (e) => {
  e.preventDefault()
    setIsTasks([...isTasks,e.target[0].value])
    // console.log(e.target[0].value)
    e.target[0].value = ''
  }

 
  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" placeholder='Call To Admin, Meeting...' value={isVal}  onChange={(e)=>setIsVal(e.target.value)} />
        <input type="submit" value='Add' />
        <input type="button" value='clear' onClick={()=>setIsVal('')}/>
      </form>
      <ul className='tasklist'>
        {
          isTasks.map((task)=><li>{task}</li>)
        }
      </ul>
      <Child inputVal={isVal}/>
    </>
  )
}

export default App