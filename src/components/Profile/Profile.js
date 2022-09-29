import React from 'react';
import './Profile.css'
const Profile = () => {
    return (
        <div>
            <div className='text-center'>
                <div >
                    <img className='w-25 mt-3 profilePic' src="https://avatars.githubusercontent.com/u/108365548?s=400&u=edca8b7148d53a5efa3be9aa6a5ed3c9f398c204&v=4" alt="" />
                </div>
                <div>
                    <h4 className=''>Towhidur Rahman</h4>
                    <p className=''>Aspirated to be a web developper</p>
                    <p className='text-'>Student of Programming Hero Institute</p>
                </div>
             </div>
        </div>
    );
};

export default Profile;