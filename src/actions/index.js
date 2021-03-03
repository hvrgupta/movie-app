// Action is way of telling the store that i want to do something

// Action types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action Creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}