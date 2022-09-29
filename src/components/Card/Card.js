import React from 'react';
import './Card.css'
const Card = (props) => {

    return (
        <div className='single-card'>
             <div className='card-image'>
                <img src={props.image} alt="" />
            </div>   
             <div>
                <h3 className='text-center'>{props.name}</h3>
                <p className='text-center'>For Age : <b>{props.age}</b></p>
                <p className='mb-5 text-center'>Time Required: <b>{props.time}</b></p>
                <div>
                <button className='btn btn-primary w-100 button'>ADD to List</button>
                </div>
            </div>         
        </div>
    );
};

export default Card;