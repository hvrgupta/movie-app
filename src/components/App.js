import { data } from '../data'; 
import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourite } from '../actions';

class App extends React.Component {

  componentDidMount() {
    //make api call
    //dispatch action
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));

    console.log(store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourite } = this.props.store.getState();
    const index = favourite.indexOf(movie);
    if(index !== -1) {
      return true;
    }
    return false;
  }

  handleMovieClick = () => {
    this.props.store.dispatch(setShowFavourite(false));
  }

  handleFavouriteClick = () => {
    this.props.store.dispatch(setShowFavourite(true));
  }


  render() {
    const { list, favourite, showFavourite } = this.props.store.getState();
    const displayMovies = showFavourite ? favourite : list
    console.log(this.props.store.getState());
    return ( 
      <div>
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className={`tab ${showFavourite ? '' : 'active-tab'}`}>
                <button onClick={this.handleMovieClick}>Movie</button>
              </div>
              <div  className={`tab ${showFavourite ? 'active-tab' : ''}`}>
                <button onClick={this.handleFavouriteClick}>Favourite</button>
              </div>
            </div>
            <div className="list">
               {displayMovies.map((movie) => {
                 return <MovieCard 
                          movie={movie} 
                          key={movie.imdbID} 
                          dispatch={this.props.store.dispatch}
                          isFavourite={this.isMovieFavourite(movie)}/>
               })}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
