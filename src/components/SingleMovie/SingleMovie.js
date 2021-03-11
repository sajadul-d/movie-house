import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Container, Card, Button } from 'react-bootstrap';
import './SingleMovie.css'
import { Link } from 'react-router-dom';

const SingleMovie = (props) => {
    const {id, title, poster_path} = props.movie;
    return (
        <div className="background">
            <div className="col-md-5 my-5 mx-4">
            <Card style={{ width: "300px"} }>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                <Card.Body>
                    <div className="text-center">
                         <Card.Title className="movie-name">{title}</Card.Title> 
                        <Button as={Link} to={`/movie/${id}`} variant="primary"> Movie Details <FaArrowCircleRight/></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
  

        </div>
  );
};
export default SingleMovie;