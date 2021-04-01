import React from 'react';
import './List.css';

const List = ({ title, number, location, img })=>{
	return (
		<a href={`tel:${number}`} className="Box tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt={`${title}`} className="Image" src={`${img}`}/>
			<div className="nextCont">
				<h3 className="f6 dark-blue { color: var(--dark-blue); }">{title}</h3>
				<h3>{number}</h3>
				<p className="f6 Wrap">{location}</p>
			</div>


		</a>
		)
}

export default List;