import React, { useEffect, useState } from 'react'

const ChildAPI = ({dataTransfer}) => {

	const getData = async() => {
			const data = await fetch('https://dummyjson.com/products/categories');
			const res = await data.json();
			setData(res);
		}


	useEffect(async()=>{
				getData();
		return () => {
			console.log("Clean up");
		}
	},[]);

	const [data , setData] = useState();
	const passdata = () => {
		dataTransfer(data);
	}

  return (
	<>

		<h4>Child Component</h4>
		<button onClick={passdata}>Click</button>
	</>
  )
}

export default ChildAPI