import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <a href="./shop">Shop</a>
                <a href="./order">Order Review</a>
                <a href="./manage">Manage Inventory</a>
                <a href="./login">Login</a>
            </div>
        </nav>
    );
};

export default Header;