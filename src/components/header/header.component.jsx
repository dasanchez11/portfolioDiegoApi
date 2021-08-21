import React from 'react';
import './header.styles.scss';



const Header = () => {  
    return (
    <div className="header">
        <div className="header__logo">
            Logo
        </div>
        <div className="header__content">
            <a className='header__content-item' href='/curriculum' >Curriculum</a>
            <a className='header__content-item' href='/#projects' >Projects</a>
            <a className='header__content-item' href='/#about'>About</a>
            <a className='header__content-item' href='/contact' >Contact</a>
        </div>
    </div>
)}

export default Header;