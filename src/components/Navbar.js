import React from 'react';
import logo from "../logo.png";
import "./Navbar.css";

const Navbar = ({mobileState, onClick}) => (
    <div className={`menus ${mobileState ? "mobile-active" : null}`}>
        <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#home">
                <img src={logo} alt="icon" className="brand__logo"/>
                <span className="brand__name">Jeunesse Constructive</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="menu" className="navbar-nav">
                    <li data-menuanchor="home" className="nav-item active">
                        <a className="nav-link">Accueil</a>
                    </li>
                    <li data-menuanchor="about" className="nav-item">
                        <a className="nav-link">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"mooc241"}>Formation 241</a>
                    </li>
                    <li data-menuanchor="actus" className="nav-item">
                        <a className="nav-link">Nos Actions</a>
                    </li>
                    <li data-menuanchor="contact" className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <a onClick={onClick} className="toggle-btn">
            <span className="hamburger hamburger-1"/>
            <span className="hamburger hamburger-2"/>
            <span className="hamburger hamburger-3"/>
        </a>
        <nav className="mobile-nav curtain">
            <span/>
            <span/>
            <span>
                <ul id="mobile-menu" className="navbar-nav-mobile">
                    <li onClick={onClick} data-menuanchor="home" className="nav-item active">
                        <a className="nav-link">Accueil</a>
                    </li>
                    <li onClick={onClick} data-menuanchor="about" className="nav-item">
                        <a className="nav-link">Présentation</a>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <a className="nav-link" href={"mooc241"}>Formation 241</a>
                    </li>
                    <li onClick={onClick} data-menuanchor="actus" className="nav-item">
                        <a className="nav-link">Nos Actions</a>
                    </li>
                    <li onClick={onClick} data-menuanchor="contact" className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </span>
        </nav>
    </div>
);

export default Navbar;