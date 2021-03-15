import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div>Movies</div>
        <div>Favourites</div>
      </div>
      <div id= "movie-list">
        {data.map(movie=>(
          <MovieCard movie= {movie}/>
        ))}
      </div>
    </div>
  );
}

export default App;
