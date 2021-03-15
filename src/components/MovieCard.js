import React from 'react';

class MovieCard extends React.Component{
    render(){
        // console.log(this.props.movie);
        const {movie} = this.props;
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
                            <button className= "fav-btn">Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;