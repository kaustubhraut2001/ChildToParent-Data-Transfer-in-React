import {useState} from 'react'

const Child = ({onData}) => {
	 const[data , setData] =  useState("");
	 const [text , setText] =  useState("");

	const childbutton = (e) => {
		alert('Child Button Clicked')
		setData(text);
		onData(text);
		// console.log(text);

	}
  return (
	<>
		<h4>Child Component</h4>
		<input type="text" placeholder='Type Something' onChange={(e)=>{setText(e.target.value)}}/>
		<button onClick={childbutton}>Submit</button>
	</>
  )
}

export default Child