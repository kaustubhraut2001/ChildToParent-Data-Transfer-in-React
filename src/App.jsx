import { useState } from 'react'
import Child from '../Com/Child'
import './App.css'

function App() {
   const[parent , setParent] = useState();
   console.log(parent);

  const datafromparent = (data) => {
    setParent(data);
  }


  return (
    <>
    <h4>Parent</h4>
    <Child onData={datafromparent} />
    </>
  )
}

export default App
