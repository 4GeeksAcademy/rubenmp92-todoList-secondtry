import React, {useState} from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	// Add into array-> concat
	// Delete into array-> filter
	// Update into array-> map

	const changeInputValue = (e) =>{setInputValue(e.target.value)};

	const inputKeyPress = (event) => {
		if (event.key === "Enter") {
			setTodos([...todos,inputValue])
			setInputValue("")
		}
	};

	const deleteEvent = (index) => {
		const listaActualizada = todos.filter((t, currentIndex) => index !== currentIndex)
		setTodos(listaActualizada)
	}

	return (
		<div className="container">
			<h1>My todos </h1>
			<ul>
				<li>
				<input
				type="text"
				placeholder="What do you need to do?"
				value={inputValue}
				onChange={changeInputValue}
				onKeyDown={inputKeyPress}
				/>   
				</li>
				{todos.map((item, index) => (
  				<li key={index}
					style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
   				{item}
				<button
					className="btn btn-light"
					onClick={() => deleteEvent(index)}>X</button>
				</li>
				))}
			</ul>

<div>{todos.length} item left</div>
		</div>
	);
};

export default Home;
