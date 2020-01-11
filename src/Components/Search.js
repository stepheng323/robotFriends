import React from 'react';

const Search = ({ searchChange }) => {
	return (
		<div className='input-container'>
			<input
				className='input'
				type='search'
				placeholder='Search Robots'
				onChange={searchChange}
			></input>
		</div>
	);
};

export default Search;
