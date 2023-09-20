import { useState } from 'react'
import Child from '../Com/Child'
import './App.css'
import ChildAPI from '../Com/ChildAPI'

function App() {
  //  const[parent , setParent] = useState();
  //  console.log(parent);

  // const datafromparent = (data) => {
  //   setParent(data);
  // }
  const [data , setData] = useState();
  const fromChildAPI = (data1) =>{
    setData(data1);
    console.log(data);
  }


  return (
    <>
    <h4>Parent</h4>
    {/* <Child onData={datafromparent} /> */}
    <ChildAPI dataTransfer = {fromChildAPI}/>
    </>
  )
}

export default App
