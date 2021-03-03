// Reducer function should be pure function
import { ADD_MOVIES, ADD_FAVOURITE, DELETE_FAVOURITE, SHOW_FAVOURITE } from '../actions/index';

const initialState = {
    list: [],
    favourite: [],
    showFavourite: false
}

export default function movies(state = initialState ,action) {
    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    // }
    // React Community uses switch instead of if else
    switch(action.type) {
        case ADD_MOVIES: 
          return{
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE: 
          const filteredArrayAdd = state.list.filter(movie => {
              return movie.Title !== action.movie.Title
          })
          return{
                ...state,
                favourite: [action.movie,...state.favourite],
                list: filteredArrayAdd
            }
        case DELETE_FAVOURITE: 
           const filteredArray = state.favourite.filter(
               movie => movie.Title !== action.movie.Title
           );
           return{
                 ...state,
                 favourite: filteredArray,
                 list: [state.list,action.movie]
            }
        case SHOW_FAVOURITE:
            return {
                ...state,
                showFavourite: action.val   
            }
        default:
            return state;   
    }


    //return returns to the state
}