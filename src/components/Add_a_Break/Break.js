import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='text-center'>
            <div className='bg-secondary mx-5 py-2 buttonContainer'>
                 <button className='breakButton mx-3'>10</button>
                 <button className='breakButton mx-3'>20</button>
                 <button className='breakButton mx-3'>30</button>
                 <button className='breakButton mx-3'>40</button>
                 
            </div>
        </div>
    );
};

export default Break;