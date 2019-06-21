import React from 'react';
import './card.css'

const Card = ( {name, email, id} ) => {
	return(
		<div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc '>	
			<img alt='robots' src = {`//robohash.org/${id}?10x100"`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>	
		</div>	
	);
}

export default Card;