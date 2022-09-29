import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  



const Activity = () => {

    const diffToast = () =>{
        toast("Activity Successful. Keep Up The Good Work.");
    }

    return (
        <div className='mt-5 text-center'>
             <button onClick={diffToast} className='btn btn-success w-75'>Activity Completed</button>
             <ToastContainer/>
        </div>
    );
};

export default Activity;