import React from 'react';
import './PlaceOrder.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { placeId } = useParams();
    const [place, setPlace] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.booking_id = placeId;
        axios.post('https://calm-cliffs-67341.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
        console.log(data)

    }

    useEffect(() => {
        fetch(`https://calm-cliffs-67341.herokuapp.com/places/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data))
            ;
    }, [placeId])

    return (
        <div className="container mx-auto py-5">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={place?.image} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            <h3 className="card-title">Destination: {place?.name}</h3>
                            <h5 className="card-title">Country: {place?.country}</h5>
                            <h5 className="card-title">Description: {place?.description}</h5>
                            <h5 className="card-title">Tour Cost: ${place?.cost}&nbsp;&nbsp;Ticket Price: ${place?.ticket}</h5>
                            <div className="placeOrder d-flex flex-column">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                                    <input {...register("email", { required: true, maxLength: 20 })} value={user.email} />
                                    <input type="text" {...register("address")} placeholder="Address" />
                                    <input type="number" {...register("phone")} placeholder="Phone" />
                                    <input type="text" {...register("city")} placeholder="City" />
                                    <input type="text" {...register("status")} value="Pending" style={{ border: 'none' }} />
                                    <input type="submit" />
                                </form>
                            </div>
                            {/* <div className="d-flex justify-content-between ">
                                <Link
                                    to={`/mybookings/${placeId}`}
                                    className="btn w-50 btnBg mx-1"
                                >
                                    Delete Order
                                </Link>
                                <Link
                                    to={`/mybookings/${placeId}`}
                                    className="btn w-50 btnBg mx-1"
                                >
                                    Confirm Order
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;