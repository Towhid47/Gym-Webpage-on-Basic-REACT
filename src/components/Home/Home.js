import React from 'react';
import Cards from '../Cards/Cards';
import List from '../List/List';
import './Home.css';


const Home = () => {
    return (
        <div className='home'> 

             <div className='cardsContainer'>
                 <Cards></Cards>  
             </div>

             <div className='listContainer'>
                <List></List>
             </div>
        </div>
 );
}; 

export default Home ;