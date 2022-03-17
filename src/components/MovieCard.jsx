import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        <Card.Text>{props.movie.description}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
