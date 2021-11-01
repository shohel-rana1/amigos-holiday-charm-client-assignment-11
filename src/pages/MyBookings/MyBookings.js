import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleOrer from '../SingleOrder/SingleOrer';

const MyBookings = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-cliffs-67341.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const MyItems = orders.filter(order => order.email === user.email)

    return (
        <div className="backgrnd-img py-5">
            {
                MyItems.map(item => <SingleOrer
                    key={item._id}
                    item={item}
                ></SingleOrer>)
            }
        </div>
    );
};

export default MyBookings;