import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Cards.css";
const Cards = () => {

    //Load Data From Custom API JSON
    const [cards,setCards] = useState([]);

    useEffect(()=>{
         fetch('custom.json')
         .then(res => res.json())
         .then(data => setCards(data));
    },[]);

    return (
        <div className='CardsContainer'>
            {
                cards.map((card) => <Card image={card.picture} 
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