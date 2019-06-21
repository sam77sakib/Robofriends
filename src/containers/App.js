import React, { Component } from 'react';
import CardList from '../component/cardlist';
import Search from '../component/search';
import { robots } from '../component/robot_inf';
import Scroll from '../component/scroll'

class App extends Component{
	constructor(){
		super();
		this.state ={
			robot: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(user => {this.setState({robot: user})});
	}
	SearchResult = (e)=>{
		this.setState({searchfield: e.target.value})
	}
	render(){
		const { robot, searchfield } = this.state
		const filteredRobot = robot.filter((user) =>{
			return user.username.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(robot.length === 0){
			return <h1>Loading</h1>
		}else{
			return(
				<div className = 'tc'>
					<Search searchEvalution = {this.SearchResult} />
					<Scroll>	
						<CardList robot={filteredRobot}/>
					</Scroll>	
				</div>
			)	
		}	
		

	}	
}

export default App;