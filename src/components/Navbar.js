import React from 'react';
import { handleMovieSearch, addToMovies } from '../actions';

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
    handleAddToMovie = (movie) =>{
        const {dispatch} = this.props;
        dispatch(addToMovies(movie));
    }
    render(){
        const {result, showSearchResult} = this.props.search;
        return (
            <div className= "nav">
                <div id= 'input-fields'>
                    <input type= "text" placeholder= "Search..." onChange= {this.handleChange}></input>
                    <button type= "submit" className= "btn" onClick= {this.handleSearch}>Search</button>
                    {
                      showSearchResult && result.Title && 
                      <div className= "search-results">
                          <div className= "search-result">
                              <div className= "search-image">
                                <img src= {result.Poster}></img>
                              </div>
                              <div className= "movie-info">
                                  <div className= "title">{result.Title}</div>
                                  <button className= "add-movie-btn" onClick= {() => this.handleAddToMovie(result)}>Add to movies</button>
                              </div>
                          </div>
                      </div>  
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;