import React from 'react';
import './MobileNav.css'

const MobileNav = ({onClick}) => (
    <nav>
        <ul className="navbar-nav-mobile">
            <li data-menuanchor="home" className="nav-item active">
                <a onClick={onClick} className="nav-link" href="#home">Accueil</a>
            </li>
            <li data-menuanchor="about" className="nav-item">
                <a onClick={onClick} className="nav-link" href="#about">Présentation</a>
            </li>
            <li data-menuanchor="actus" className="nav-item">
                <a onClick={onClick} className="nav-link" href="#actus">Services</a>
            </li>
            <li className="nav-item">
                <a onClick={onClick} className="nav-link" href={"#mooc241"}>Formation241</a>
            </li>
            <li data-menuanchor="contact" className="nav-item">
                <a onClick={onClick} className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
);

export default MobileNav;