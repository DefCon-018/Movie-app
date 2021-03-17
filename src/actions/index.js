
// action types(variable) 
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';
 
// action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val){
    return {
        type: SET_SHOW_FAVOURITE,
        val
    }
}

export function handleMovieSearch(movie){
    let url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
    return function(dispatch) {
       fetch(url)
        .then(response => response.json())
        .then(movie => {
            // console.log('movie', movie);
            dispatch(addSearchResult(movie));
        })
    }
}

export function addSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT, 
        movie
    }
}

export function addToMovies(movie){
    return {
        type: ADD_TO_MOVIES,
        movie
    }
}