import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

//Displays the grid of results
const Grid = ({ movies }) => {
  const [grid, setGrid] = useState([]);
  const [loading, setLoading] = useState(false);

  //Updates the display every time 'movies' is changed'
  useEffect(() => {
    setGrid(movies);
  }, [movies]);
  console.log('movies', grid);
  return (
    <div className="card-grid">
      {grid &&
        grid.map((movie, index) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default Grid;
