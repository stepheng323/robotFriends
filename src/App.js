import React, { useState, useEffect } from 'react';
import './App.css';
import { robotsList } from './Components/Robots';
import CardList from './Components/CardList';
import Search from './Components/Search';
import Scroll from './Components/Scroll';

const App = () => {
	const [robots, setRobots] = useState(robotsList);
	const [search, setSearch] = useState('');

	const onSearchChange = e => {
		setSearch(e.target.value);
	};
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(search.toLowerCase());
	});
	return (
		<div className='App'>
			<h1 className='header'>Robot Friends</h1>
			<Search searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
};

export default App;
