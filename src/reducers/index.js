import {ADD_MOVIES, ADD_FAVOURITE, ADD_TO_MOVIES, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE, ADD_SEARCH_RESULT} from '../actions';
import {combineReducers} from 'redux';

const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies           
    //     }
    // }
    // return state;
    switch (action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            let filterArray = state.favourites.filter(movie =>
                movie.Title !== action.movie.Title
            ) 
           return {
               ...state,
               favourites : filterArray
           }
        case SET_SHOW_FAVOURITE: 
           return {
               ...state,
               showFavourites : action.val
           }
        case ADD_TO_MOVIES:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result: []
}

// search Reducer
export function search(state = initialSearchState, action){
  switch(action.type){
      case ADD_SEARCH_RESULT:
          return {
              result : action.movies
          }

       default: 
          return state;   
  }  
}

// const initialRootState = {
//     movies: initialMovieState, 
//     search: initialSearchState
// }

// export default function rootReducer(state= initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
})