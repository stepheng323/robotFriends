import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

const CardList = ({ robots }) => {
	const cardarray = robots.map(robot => {
		return (
			<Link to={`/robot/${robot.id}`}>
				<Card
					key={robot.id}
					id={robot.id}
					name={robot.name}
					email={robot.email}
				/>
			</Link>
		);
	});
	return <div className='cardlist'>{cardarray}</div>;
};

export default CardList;
