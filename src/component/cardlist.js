import React from 'react';
import Card from './card'
import './cardlist.css'
const CardList = ({ robot }) =>{
	return(
		<div>
			{
			robot.map((user, i) =>{
				return( 
					<Card
					key = {i} 
					id = {robot[i].id} 
					name={robot[i].username} 
					email = {robot[i].email} 
					/>
				)	
			})
			}	
		</div>	
	)
}
export default CardList;