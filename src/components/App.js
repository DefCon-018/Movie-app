import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props;
    console.log("store before", store.getState());
    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    })
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
    console.log('store after ', store.getState());
  }

  render(){
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div>
          <div>Movies</div>
          <div>Favourites</div>
        </div>
        <div id= "movie-list">
          {movies.map((movie, index)=>(
            <MovieCard movie= {movie} key= {`movie-${index}`}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
