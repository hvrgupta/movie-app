// Reducer function should be pure function

export default function movies(state = [],action) {
    if(action.type === 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}