import React from 'react';
import Break from '../Add_a_Break/Break';
import BreakTime from '../BreakTime/BreakTime';
import Details from '../exerciseDetails/Details';
import Profile from '../Profile/Profile';
import './List.css'
const List = () => {
    return (
        <div className='h-100 bg-black '>
             <Profile></Profile>
             <div className='mt-5'>
                  <h3 className='ms-3'>Add a Break</h3>
                  <Break></Break>
             </div>

             <div className='mt-5'>
                  <h3 className='ms-3'>Exercise Details</h3>
                  <Details></Details>
                  <BreakTime></BreakTime>
             </div>

        </div>
    );
};

export default List;