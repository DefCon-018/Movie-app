import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE} from '../actions';

const initialState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies(state = initialState, action){
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
        default:
            return state;
    }
}