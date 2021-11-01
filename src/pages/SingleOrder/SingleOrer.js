import React from 'react';
import usePlaces from '../../hooks/usePlaces';

const SingleOrer = ({ item }) => {
    const [places] = usePlaces();
    const { address, city, email, name, booking_id, status } = item;
    const myOrder = places.find(place => place._id === booking_id);

    return (
        <div className=" container" >
            <div className="row">
                <div className="col-md-4 text-left">
                    <img src={myOrder?.image} className=" h-50 w-100" alt="..." />
                    <h3 className="">Destination: {myOrder?.name}</h3>
                    <h5 className="">Country: {myOrder?.country}</h5>
                </div>
                <div className="col-md-8">
                    <div className="text-left">
                        <h3 className="">Name: {name}</h3>
                        <h5 className="">Address: {address}</h5>
                        <h5 className="">Email: {email}</h5>
                        <h5 className="">City: {city}</h5>
                        <h5 className="">Status: {status}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrer;