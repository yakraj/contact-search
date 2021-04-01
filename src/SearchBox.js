import React from 'react';
import './List.css';


const SearchBox = ({ searchfield, searchChage}) => {
	return (
		<div>
			<input 
			className='stick pa3 ba1 b--green bg-lightest-blue' 
			type="search" 
			placeholder="Search Contacts" 
			onChange = { searchChage }
			/>


		</div>
		);

}










export default SearchBox;