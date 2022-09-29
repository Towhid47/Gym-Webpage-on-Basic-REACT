//import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Cards.css";
const Cards = (props) => {
     console.log(props);

    return (
        <div className='CardsContainer'>
            {
                 props.cards.map((card) => <Card image={card.picture} 
                                           name={card.exerciseName} 
                                           details={card.details}  
                                           key={card.id}
                                           time={card.time}
                                           age={card.age}
                                           ></Card>)
            }
        </div>
    );





};

export default Cards;