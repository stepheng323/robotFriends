import React from 'react';
import './App.css';
import Home from './Components/Home' 
import RobotDetails from './Components/RobotDetails';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
	return (
		<Router>
				<div className='App'>
					<Route path="/" exact component={ Home }/>
					<Route path="/robot/:id" component={RobotDetails} />
				</div>
		</Router>
	);
};

export default App;

