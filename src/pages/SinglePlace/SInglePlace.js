import React from 'react';
import './SinglePlace.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SInglePlace = ({ place }) => {
    const { image, name, country, description, cost, ticket, _id } = place;
    return (
        <Col className=" mt-5 ">
            <Card className="card">
                <div className="img-wrapper"><Card.Img className="img card img-fluid inner-img" variant="top" src={image} /></div>
                <Card.Body>
                    <Card.Title className="name cardText">{name},{country}</Card.Title>
                    <Card.Text className="name cardText">{description.slice(0, 25)}</Card.Text>
                    <Card.Text className="name cardText">Travel Cost: ${cost}</Card.Text>
                    <Card.Text className="name cardText">Ticket: ${ticket}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link
                        to={`/placeorder/${_id}`}
                        className="btn w-100 btn-bg mx-auto"
                    >
                        Book Now
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SInglePlace;