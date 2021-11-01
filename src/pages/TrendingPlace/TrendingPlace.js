import React from 'react';
import { Col } from 'react-bootstrap';

const TrendingPlace = ({ trend }) => {
    const { image, name, description } = trend;
    return (
        <Col className=" mt-5 ">
            <div className="card bg-dark text-black img-wrapper">
                <img src={image} className="card-img h-25 inner-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default TrendingPlace;