import React from 'react';
import { addFavourite } from '../actions';
import {removeFavourite } from '../actions'

class MovieCard extends React.Component{

    handleFavouriteClick = ()=>{
        const {movie, dispatch} = this.props;
        dispatch(addFavourite(movie));
    }

    handleUnfavouriteClick = () =>{
        const {movie, dispatch} = this.props;
        dispatch(removeFavourite(movie));
    }

    render(){
        // console.log(this.props.movie);
        const {movie, isFavourite} = this.props;
        return(
            <div className= "movie-card">
                <div className= "image">
                    <img src= {movie.Poster} alt= "image"></img>
                </div>
                <div className= "about-movie">
                    <div className= "first-part">
                        <div className= "heading">
                            <h2>{movie.Title}</h2>
                        </div>
                        <div className= "description">
                            <p>{ movie.Plot }</p>
                        </div>
                    </div>
                    <div className= "second-part">
                        <div className= "rating">
                            <h1>{ movie.imdbRating }</h1>
                        </div>
                        <div className= "buttons">
                            {
                                isFavourite 
                                ? <button className= "unfav btn" onClick= {this.handleUnfavouriteClick}>Unfavourite</button> 
                                : <button className= "fav-btn btn" onClick= {this.handleFavouriteClick}>Favourite</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;