import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import usePlaces from '../../hooks/usePlaces';

const MyBookings = () => {
    const [order, setOrder] = useState([]);
    const { Order_id } = useParams();
    const [places] = usePlaces();
    useEffect(() => {
        const url = `http://localhost:7000/orders${Order_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [Order_id])
    const singleItem = places.find(place => place._id === Order_id)

    return (
        <div className=" container" >
            <div className="row">
                <div className="col-md-4 text-left">
                    <img src={singleItem?.image} className=" h-50 w-100" alt="..." />
                    <h3 className="">Destination: {singleItem?.name}</h3>
                    <h5 className="">Country: {singleItem?.country}</h5>
                </div>
                <div className="col-md-8">
                    <div className="text-left">
                        <h3 className="">name: {order.name}</h3>
                        <h5 className="">Address: {order.address}</h5>
                        <h5 className="">City: {order.city}</h5>
                        <h5 className="">Status: {order.status}</h5>
                        {/* <button onClick={() => handleDelete(order._id)}>Delete</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;