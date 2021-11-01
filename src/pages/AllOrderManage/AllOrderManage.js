import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePlaces from '../../hooks/usePlaces';

const AllOrderManage = ({ order }) => {
    const [places] = usePlaces();
    const { name, address, city, booking_id, status } = order;
    const [orders, setOrders] = useState({});

    const myPlace = places.find(place => place._id === booking_id)
    console.log(myPlace);

    //delete an user
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure to Delete?');
        if (proceed) {
            const url = `http://localhost:7000/orders/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainnigs = orders.filter(order => order._id !== id);
                        setOrders(remainnigs);
                    }
                })
        }

    }
    return (
        <div className=" container" >
            <div className="row">
                <div className="col-md-4 text-left">
                    <img src={myPlace?.image} className=" h-50 w-100" alt="..." />
                    <h3 className="">Destination: {myPlace?.name}</h3>
                    <h5 className="">Country: {myPlace?.country}</h5>
                </div>
                <div className="col-md-8">
                    <div className="text-left">
                        <h3 className="">name: {name}</h3>
                        <h5 className="">Address: {address}</h5>
                        <h5 className="">City: {city}</h5>
                        <h5 className="">Status: {status}</h5>
                        <button onClick={() => handleDelete(order._id)}>Delete</button>
                        <Link to={`/update/${order._id}`}>Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrderManage;