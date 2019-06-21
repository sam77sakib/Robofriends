import React from 'react';
import './search.css'

const Search = ({searchEvalution}) =>{
	return(
		<div>
			<h1>ROBOFRIENDS</h1>
			<input 
			className= 'ba b--red br2'
			type='search' 
			placeholder='search robot here' 
			onChange = {searchEvalution}
			/>
		</div>
	)	
}
export default Search;