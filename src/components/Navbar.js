import React from 'react';
import { handleMovieSearch } from '../actions';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchText : ''
        }
    }
    handleChange = (e) =>{
        this.setState({
            searchText: e.target.value
        })
    }
    handleSearch = () =>{
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }
    render(){
        return (
            <div className= "nav">
                <div id= 'input-fields'>
                    <input type= "text" placeholder= "Search..." onChange= {this.handleChange}></input>
                    <button type= "submit" onClick= {this.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;