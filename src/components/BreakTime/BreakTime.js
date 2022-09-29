import React from 'react';

const BreakTime = (props) => {
    return (
        <div>
            <div className='bg-secondary py-3 m-5 d-flex rounded-3'>
            <h4 className='px-2'>Break Time</h4>
            <h5 className='mx-5'>{props.timeBreak1} Seconds</h5>
        </div>
        </div>
    );
};

export default BreakTime;