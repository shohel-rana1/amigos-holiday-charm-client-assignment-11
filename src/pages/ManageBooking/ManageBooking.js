import React, { useEffect, useState } from 'react';
import AllOrderManage from '../AllOrderManage/AllOrderManage';

const ManageBooking = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="py-3">
            <h2 className="pb-2">Orders available</h2>
            {
                orders.map(order => <AllOrderManage
                    key={order._id}
                    order={order}
                ></AllOrderManage>)
            }
        </div>
    );
};

export default ManageBooking;