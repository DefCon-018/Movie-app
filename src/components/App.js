import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';
import { setShowFavourite } from '../actions';
import {connect} from '../index';

class App extends React.Component {


  isMovieFavourite = (movie) =>{
    const {movies} = this.props;
    let index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    else{
      return false;
    }
  }

  onChangeTab = (val) =>{
    this.props.dispatch(setShowFavourite(val));
  }

  componentDidMount(){
    const {dispatch} = this.props;
    // store.subscribe(()=>{
    //   console.log("Updated");
    //   this.forceUpdate();
    // })
    dispatch(addMovies(data));
  }

  render(){
    const {movies, search} = this.props;
    const {showFavourites, list, favourites} = movies;

    const displayMovies = showFavourites ? favourites : list;
    // console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar search= {search}/>
        <div className = "tabs">
          <div className= {`tab ${showFavourites ? '' : "active-tab"}`} onClick= {()=>this.onChangeTab(false)}>Movies</div>
          <div className= {`tab ${showFavourites ? "active-tab" : ''}`} onClick= {() => this.onChangeTab(true)}>Favourites</div>
        </div>
        <div id= "movie-list">
          {displayMovies.map((movie, index)=>(
            // console.log("movie", movie),
            <MovieCard 
              movie= {movie} 
              key= {`movie-${index}`}
              dispatch = {this.props.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
            />
          ))}
          {displayMovies.length === 0 ? <div style= {{textAlign: 'center', margin: 20, fontWeight: 700, fontSize: '1.3rem'}}>No movie to display !</div> : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <storeContext.Consumer>
//         {(store)=>{
//           return <App store= {store}/>
//         }}
//       </storeContext.Consumer>
//     )
//   }  
// }

function callback(state) {
  return {
    movies: state.movies,
    search: state.search
  }
}

const ConnectedAppComponent = connect(callback)(App);

export default ConnectedAppComponent;
