import React, { useState } from 'react';
import MovieDataService from '../services/movies';
import { useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AddReview = props => {
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const params = useParams();

  const onChangeReview = e => {
    const review = e.target.value;
    setReview(review);
  };

  const saveReview = () => {
    const data = {
      movie_id: params.id,
      review: review,
      name: 'User',
      user_id: '507f1f77bcf86cd799439011'
    };

    MovieDataService.createReview(data)
      .then(response => {
        console.log(response.data);
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
        </div>
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={onChangeReview}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={saveReview}
          >
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AddReview;
