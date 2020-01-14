import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RobotDetails = ({match}) => {
	const [robot, setRobot] = useState([]);
	const [image, setImage] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const {id} = match.params;
		const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		const items =  await data.json();
		setImage(`https://robohash.org/${id}?size=200x200`);
		setRobot(items);
	};
const {name, username,email, phone, website} = robot;
	return (
		<React.Fragment>
			<Link to={'/'}>
				<h1 className='header'>Robot Friends</h1>
			</Link>
			<div className='details'>
				<div className='detailsHeader'>
					<h2>Robot Friends</h2>
				</div>
				<div className='body'>
					<div className='img'>
						<img src={image} alt='robots'></img>
					</div>
					<div className='info'>
						<h2>{name}</h2>
						<p>
							My nickname is {username} my email is {email} and phone is {phone}. i am a
							robot from the future, i have come to teach you certain things
							about the universe. you can call me on my phone or visit my
							website {website}. Dont tell anyone about me, i am the only surviving robot
							in my clan
						</p>
						<Link>
							<button className='btn'>Visit website</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RobotDetails;
