import React from 'react';
import CardComponent from './CardComponent';
import SearchBox from './SearchBox'
import {robots} from './robots'
import './App.css'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchString: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchString: event.target.value });
    }
    render(){
        
        const filteredRobots = this.state.robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(this.state.searchString.toLowerCase())
            }
        )
        return (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardComponent robots={filteredRobots} />
        </div> 
    );
}
}

export default App;