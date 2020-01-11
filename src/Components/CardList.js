import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
	const cardarray = robots.map(robot => {
		return (
			<Card
				key={robot.id}
				id={robot.id}
				name={robot.name}
				email={robot.email}
			/>
		);
	});
	return <div className='cardlist'>{cardarray}</div>;
};

export default CardList;
