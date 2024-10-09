import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <a href ="/">Home</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
        </nav>
    );
};

export default Header;
