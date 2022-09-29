import React, { useState } from 'react';
import Break from '../Add_a_Break/Break';
import BreakTime from '../BreakTime/BreakTime';
import Details from '../exerciseDetails/Details';
import Profile from '../Profile/Profile';
import './List.css'
const List = (props) => {
    
    //when buttons from Break component are being clicked , set the breakTime into BreakTime component.
     const [timeBreak1, setTimeBreak1] = useState(0);

     const breakTime = (timeBreak) => {
          setTimeBreak1(timeBreak);
     }
    
    
     return (
        <div className='h-100 bg-black'>
             <Profile></Profile>
             <div className='mt-5'>
                  <h3 className='ms-3'>Add a Break</h3>
                  <Break breakTime={breakTime}></Break>
             </div>

             <div className='mt-5'>
                  <h3 className='ms-3'>Exercise Details</h3>
                  <Details time={props.time}></Details>
                  <BreakTime timeBreak1={timeBreak1}></BreakTime>
             </div>

        </div>
    );
};

export default List;