import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import Search from './Search';

const Home = () => {

	const [robots, setRobots] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch('https://jsonplaceholder.typicode.com/users');
		const items = await data.json();
		setRobots(items);
	};

	const onSearchChange = e => {
		setSearch(e.target.value);
	};
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(search.toLowerCase());
	});
	return (
		<div>
			<h1 className='header'>Robot Friends</h1>
			<Search searchChange={onSearchChange} />
			<CardList robots={filteredRobots} />
		</div>
	);
};

export default Home;