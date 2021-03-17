import React from 'react';
import {addToMovies} from '../actions';

class SearchItem extends React.Component{

    handleAddToMovies = () =>{
        const {movie, dispatch} = this.props;
        dispatch(addToMovies(movie));
    }
    render(){
        const {movie} = this.props;
        // console.log("movie", movie);
        return (
            <div className= "search-item">
                <div className= "search-img">
                    <img src= {movie.Poster}></img>
                </div>
               <div className= "search-desc">
                    <div className= "title">{movie.Title}</div>
                    <button className= "add-to-fav-btn" onClick= {this.handleAddToMovies}>Add to movies</button>
               </div>
            </div>
        )
    }
}

export default SearchItem;