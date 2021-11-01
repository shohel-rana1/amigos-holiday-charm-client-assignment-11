import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `https://calm-cliffs-67341.herokuapp.com/orders/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    //update user
    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedOrder = { status: updatedStatus }
        setOrder(updatedOrder);
    };

    const handleUpdateOrder = e => {
        const url = `https://calm-cliffs-67341.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Updated Successfully')
                    setOrder({})
                }
            })

        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleUpdateOrder}>
                <input type="text" onChange={handleStatusChange} value={order.status || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;