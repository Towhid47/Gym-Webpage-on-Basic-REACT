import React from 'react';
import './Break.css'
const Break = (props) => {
    return (
        <div className='text-center'>
            <div className='bg-secondary mx-5 py-2 buttonContainer'>
                 <button onClick={() => props.breakTime(10)} className='breakButton mx-3'>10</button>
                 <button onClick={() => props.breakTime(20)} className='breakButton mx-3'>20</button>
                 <button onClick={() => props.breakTime(30)} className='breakButton mx-3'>30</button>
                 <button onClick={() => props.breakTime(40)} className='breakButton mx-3'>40</button>
                 
            </div>
        </div>
    );
};

export default Break;