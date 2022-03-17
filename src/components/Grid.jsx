import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

const Grid = ({ movies }) => {
  const [grid, setGrid] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //movies && movies.length === 0 ? setLoading(true) : setLoading(false);
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
