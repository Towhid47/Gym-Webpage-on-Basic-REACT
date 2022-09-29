import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='mt-0 bg-black py-1 title'>
             <h1 className='container py-4'><FontAwesomeIcon icon={faDumbbell} /> Ultra Fitness GYM </h1>
        </div>
    );
};

export default Header;