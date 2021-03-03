import { data } from '../data'; 
import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

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
  
  render() {
    const { list } = this.props.store.getState();
    return ( 
      <div>
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className="tab">
                Movies
              </div>
              <div className="tab">
                Favourites
              </div>
            </div>
            <div className="list">
               {list.map((movie) => {
                 return <MovieCard movie={movie} key={movie.imdbID}/>
               })}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
