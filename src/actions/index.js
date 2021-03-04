// Action is way of telling the store that i want to do something

// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// Action Creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function deleteFavourite(movie) {
    return {
        type: DELETE_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val) {
    return {
        type: SHOW_FAVOURITE,
        val
    }
}

export function handleMovieSearch(movie) {
    return function(dispatch) {
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
        fetch(url)
           .then(response => response.json())
           .then(movie => {
                console.log('movie',movie);
                // dispatch an action
                dispatch(addMovieSearchResult(movie));
           }) 
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}