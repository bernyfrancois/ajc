import React from 'react';
import './MobileNav.css'
import {Link} from "react-router-dom";

const MobileNav = ({onClick}) => (
    <nav>
        <ul id="mobile-menu" className="navbar-nav-mobile">
            <li data-menuanchor="home" className="nav-item active">
                <a onClick={onClick} className="nav-link" href="#home">Accueil</a>
            </li>
            <li className="nav-item">
                <a onClick={onClick} className="nav-link" href={"#mooc241"}>Formation241</a>
            </li>
            <li data-menuanchor="about" className="nav-item">
                <a onClick={onClick} className="nav-link" href="#about">Nos actions</a>
            </li>
            <li data-menuanchor="actus" className="nav-item">
                <a onClick={onClick} className="nav-link" href="#actus">Actualités</a>
            </li>
            <li data-menuanchor="contact" className="nav-item">
                <a onClick={onClick} className="nav-link" href="#contact">Contact</a>
            </li>
            <li  className="nav-item">
                <Link onClick={onClick} className="nav-link" to={"myaccount"}>Mon Compte</Link>
            </li>
        </ul>
    </nav>
);

export default MobileNav;