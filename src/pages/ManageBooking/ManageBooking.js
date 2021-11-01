import React, { useEffect, useState } from 'react';
import AllOrderManage from '../AllOrderManage/AllOrderManage';

const ManageBooking = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-cliffs-67341.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="backgrnd-img">
            <div className="py-3">
                <h2 className="pb-2">Orders available</h2>
                {
                    orders.map(order => <AllOrderManage
                        key={order._id}
                        order={order}
                    ></AllOrderManage>)
                }
            </div>
        </div>
    );
};

export default ManageBooking;