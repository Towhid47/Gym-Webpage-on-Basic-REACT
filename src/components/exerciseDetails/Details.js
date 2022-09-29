import React from 'react';

const Details = (props) => {
    return (
        <div className='bg-secondary py-3 mx-5 d-flex rounded-3'>
            <h4 className='px-2'>Exercise Time</h4>
            <h5 className='mx-5'>{props.time} Seconds</h5>
        </div>
        
    );
};

export default Details;