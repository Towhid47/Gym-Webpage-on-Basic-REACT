import React, { useEffect, useState } from 'react';

import Cards from '../Cards/Cards';
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
    
     




    return (
        <div className='home'> 

             <div className='cardsContainer'>
                 <Cards cards={cards}></Cards>  
             </div>

             <div className='listContainer container '>
                <List></List>
             </div>
        </div>
 );
}; 

export default Home ;