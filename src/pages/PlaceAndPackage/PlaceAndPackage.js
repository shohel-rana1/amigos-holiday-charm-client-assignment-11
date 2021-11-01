import React from 'react';
import { Row } from 'react-bootstrap';
import usePlaces from '../../hooks/usePlaces';
import SInglePlace from '../SinglePlace/SInglePlace';

const PlaceAndPackage = () => {
    const [places] = usePlaces();
    return (
        <>
            <div className="backgrnd-img">
                <div className="text-enter pt-5">
                    <h1 style={{ color: '#069CAD' }} className="fs-1">Book A Package</h1>
                    <h3 style={{ color: '#2C77B1' }} className=" fs-3">select your Tour Place</h3>
                </div>
                <div className="backgrnd-img container-fluid px-4 p-md-5">
                    <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                        {
                            places.map(place => <SInglePlace
                                key={place._id}
                                place={place}
                            ></SInglePlace>)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default PlaceAndPackage;