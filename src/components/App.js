import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';
import { setShowFavourite } from '../actions' 

class App extends React.Component {


  isMovieFavourite = (movie) =>{
    const {movies} = this.props.store.getState();
    let index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    else{
      return false;
    }
  }

  onChangeTab = (val) =>{
    this.props.store.dispatch(setShowFavourite(val));
  }

  componentDidMount(){
    const {store} = this.props;
    console.log("store before", store.getState());
    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    console.log('store after ', store.getState());
  }

  render(){
    const {movies} = this.props.store.getState();
    const {showFavourites, list, favourites} = movies;

    const displayMovies = showFavourites ? favourites : list;
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar dispatch= {this.props.store.dispatch}/>
        <div className = "tabs">
          <div className= {`tab ${showFavourites ? '' : "active-tab"}`} onClick= {()=>this.onChangeTab(false)}>Movies</div>
          <div className= {`tab ${showFavourites ? "active-tab" : ''}`} onClick= {() => this.onChangeTab(true)}>Favourites</div>
        </div>
        <div id= "movie-list">
          {displayMovies.map((movie, index)=>(
            <MovieCard 
              movie= {movie} 
              key= {`movie-${index}`}
              dispatch = {this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
            />
          ))}
          {displayMovies.length === 0 ? <div style= {{textAlign: 'center', margin: 20, fontWeight: 700, fontSize: '1.3rem'}}>No movie to display !</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
