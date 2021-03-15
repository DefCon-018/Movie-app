import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';

class App extends React.Component {


  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();
    let index = favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    else{
      return false;
    }
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
    const {list} = this.props.store.getState();
    console.log(list);
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div>
          <div>Movies</div>
          <div>Favourites</div>
        </div>
        <div id= "movie-list">
          {list.map((movie, index)=>(
            <MovieCard 
              movie= {movie} 
              key= {`movie-${index}`}
              dispatch = {this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
              state = {this.props.store.getState()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
