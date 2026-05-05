import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { useParams, Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Movie = props => {
  const [movie, setMovie] = useState({
    id: null,
    title: '',
    rated: '',
    reviews: []
  });

  const params = useParams();

  const getMovie = id => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMovie(params.id);
  }, [params.id]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image
              src={movie.poster + '/100x250'}
              fluid
            />
          </Col>
          <Col>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              Rating: {movie.rated}
            </Card.Text>
            <Card.Text>{movie.plot}</Card.Text>
            <Link to={'/movies/' + movie._id + '/review'}>
              Add Review
            </Link>
          </Col>
        </Row>
      </Container>

      <h2>Reviews</h2>
      <br />
      <Container>
        {movie.reviews && movie.reviews.map((review, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>
                {review.name + ' reviewed on ' + review.date}
              </Card.Title>
              <Card.Text>{review.review}</Card.Text>
              {props.user && props.user._id === review.user_id && (
                <Row>
                  <Col>
                    <Link to={'/movies/' + movie._id + '/review'}>Edit</Link>
                  </Col>
                  <Col>
                    <Button variant="link">Delete</Button>
                  </Col>
                </Row>
              )}
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Movie;
