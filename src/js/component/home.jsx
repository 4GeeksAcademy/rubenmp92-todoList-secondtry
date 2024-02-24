import React, {useState} from "react";

  
//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	// Add into array-> concat
	// Delete into array-> filter
	// Update into array-> map

	const inputKeyPress = (event) => {
		if (event.key === "Enter") {
			setTodos([...todos,inputValue])
			setInputValue("")
		}
	};

	return (
		<div className="container">
			<h1>My todos </h1>
			<ul>
				<li>
				<input
				type="text"
				placeholder="What do you need to do?"
				value={inputValue}
				onChange={(e)=> setInputValue(e.target.value)}
				onKeyDown={inputKeyPress}
				/>   
				</li>
				{todos.map((item, index) => (
  				<li key={index}
					style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
   				{item}
				<button
					className="btn btn-light"
					onClick={() => setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}>X</button>
				</li>
				))}
			</ul>

<div>{todos.length} item left</div>
		</div>
	);
};

export default Home;
