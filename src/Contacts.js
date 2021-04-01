import React from 'react';
import List from './List';

const Contacts = ({ directory }) => {
	const contactDetails = directory.map((title, i) => {
		return (<List key = { i } 
			img = {directory[i].img}
			title = {directory[i].title}
			number = {directory[i].number}
			location = {directory[i].location}

			/>);
	})
	return (
		<div>
			{contactDetails}
		</div>
		)
}


export default Contacts;