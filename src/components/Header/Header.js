import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='container title'>
             <h1><FontAwesomeIcon icon={faDumbbell} /> Ultra Fitness GYM </h1>
        </div>
    );
};

export default Header;