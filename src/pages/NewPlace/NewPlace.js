import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './NewPlace.css'
const NewPLace = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:7000/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="add-place mx-auto">
            <h2>Add a Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("country", { required: true, maxLength: 20 })} placeholder="Country" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("cost")} placeholder="Cost" />
                <input type="number" {...register("ticket")} placeholder="Ticket" />
                <input {...register("image")} placeholder="Image Url" />
                <input type="submit" className="btnBg" />
            </form>
        </div>
    );
};

export default NewPLace;