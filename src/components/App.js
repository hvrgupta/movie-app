import { data } from '../data'; 
import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

function App() {
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
             {data.map((movie) => {
               return <MovieCard movie={movie} key={movie.imdbID}/>
             })}
          </div>
        </div>
    </div>
  );
}

export default App;
