import React from 'react';
import { NavLink } from "react-router-dom";

const TopNavLink = ({ to, label }) => {
    return (
        <li className='nav-item'>
            <NavLink className='nav-link' to={to}>{label}</NavLink>
        </li>
    );
};

export default TopNavLink;