import React from 'react';
import logo from "../logo.png";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = ({mobileState, onClick}) => (
    <div className={`menus ${mobileState ? "mobile-active" : null}`}>
        <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" data-menuanchor="home">
                <img src={logo} alt="icon" className="brand__logo"/>
                <span className="brand__name">Jeunesse Constructive</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="menu" className="navbar-nav">
                    <li onClick={onClick} className="nav-item active">
                        <NavLink to="/#home" className="nav-link">Accueil</NavLink>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <NavLink to="/#about" className="nav-link">Présentation</NavLink>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <a className="nav-link" href={"/mooc241"}>Formation 241</a>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <NavLink to={"/#actus"} className="nav-link">Nos Actions</NavLink>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <NavLink to={"/#contact"} className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <button onClick={onClick} className="toggle-btn">
            <span className="hamburger hamburger-1"/>
            <span className="hamburger hamburger-2"/>
            <span className="hamburger hamburger-3"/>
        </button>
        <nav className="mobile-nav curtain">
            <span/>
            <span/>
            <span>
                <ul id="mobile-menu" className="navbar-nav-mobile">
                    <li onClick={onClick} className="nav-item active">
                        <NavLink to="/#home" className="nav-link">Accueil</NavLink>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <NavLink to="/#about" className="nav-link">Présentation</NavLink>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <a className="nav-link" href={"/mooc241"}>Formation 241</a>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <NavLink to={"/#actus"} className="nav-link">Nos Actions</NavLink>
                    </li>
                    <li onClick={onClick} className="nav-item">
                        <NavLink to={"/#contact"} className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </span>
        </nav>
    </div>
);

export default Navbar;