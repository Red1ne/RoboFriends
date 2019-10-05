import React from 'react';
import CardComponent from '../components/CardComponent';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchString: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(
            users => {
                this.setState({robots: users});
            }
        );

    }
    onSearchChange = (event) => {
        this.setState({searchString: event.target.value });
    }
    
    render(){
        const { robots, searchString} = this.state;
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchString.toLowerCase())
            }
        )
        return (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardComponent robots={filteredRobots} />
            </Scroll>
            
        </div> 
    );
}
}

export default App;