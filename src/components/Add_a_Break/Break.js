import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='text-center'>
            <div className='bg-secondary mx-5 py-3 buttonContainer'>
                 <button className='breakButton mx-4'>10</button>
                 <button className='breakButton mx-4'>20</button>
                 <button className='breakButton mx-4'>30</button>
                 <button className='breakButton mx-4'>40</button>
                 
            </div>
        </div>
    );
};

export default Break;