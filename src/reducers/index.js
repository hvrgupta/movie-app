// Reducer function should be pure function
import { ADD_MOVIES, ADD_FAVOURITE, DELETE_FAVOURITE, SHOW_FAVOURITE } from '../actions/index';
import { combineReducers } from 'redux';  

const initialMoviesState = {
    list: [],
    favourite: [],
    showFavourite: false
}

export function movies(state = initialMoviesState ,action) {
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
        //   const filteredArrayAdd = state.list.filter(movie => {
        //       return movie.Title !== action.movie.Title
        //   })
          return{
                ...state,
                favourite: [action.movie,...state.favourite],
                // list: filteredArrayAdd
            }
        case DELETE_FAVOURITE: 
           const filteredArray = state.favourite.filter(
               movie => movie.Title !== action.movie.Title
           );
           return{
                 ...state,
                 favourite: filteredArray
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

const intitalSearchState = {
    result: {}
}

export function search(state = intitalSearchState, action) {
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie    
            }
        default:
            return state;
    }    
}

// const initalRootState = {
//     movies: initialMoviesState,
//     search: intitalSearchState
// }

// export default function rootReducer(state = initalRootState,action) {
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
});