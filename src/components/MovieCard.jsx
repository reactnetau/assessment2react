import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Using inline styles
//Sets up each search result card
const MovieCard = (props) => {
  return (
    <Card
      className="movie-card"
      style={{
        width: '15em',
        height: '100%',
        padding: '20px',
        marginBottom: '10px',
      }}
    >
      <Card.Img variant="top" src={props.movie.image} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>Rating: {props.movie.imDbRating}</Card.Text>
        <Card.Text>Year: {props.movie.year}</Card.Text>

        <Card.Text>Rank #{props.movie.rank}</Card.Text>
        <Card.Text>Crew: {props.movie.crew}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
