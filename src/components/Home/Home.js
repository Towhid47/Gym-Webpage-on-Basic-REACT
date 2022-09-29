import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
//import Cards from '../Cards/Cards';
import List from '../List/List';
import './Home.css';


const Home = () => {
     
       //Load Data from Custom API JSON
           const [cards,setCards] = useState([]);

            useEffect(()=>{
                fetch('custom.json')
                .then(res => res.json())
                .then(data => setCards(data));
            },[]);
    ////////////////////////////////////////////////
     
       // while clicking ADD to List button, enable setExerciseTime() function to get Time from every cards and perform Addition operation then Show the Total into Details component. 
        
       const [time,setTime] = useState(0);    // useState for Event Handler
       
       const exerciseTime = (timeRequired) =>{
             let newTime = time + timeRequired;
             setTime(newTime);
        }


    return (
        <div className='home'> 

             <div className='CardsContainer'>
                 {
                     cards.map((card) => <Card image={card.picture} 
                                           name={card.exerciseName} 
                                           details={card.details}  
                                           key={card.id}
                                           time={card.time}
                                           age={card.age}
                                           exerciseTime={exerciseTime}></Card>)
                 }
             </div>

             <div className='listContainer'>
                <List time={time}></List>
             </div>
        </div>
 );
}; 

export default Home ;