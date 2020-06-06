import React from 'react';
import logo from "../logo.png";
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";
import  accountIcon from "../myaccount.svg"

const Navbar = ({mobileState, onClick}) => (
    <div className={`menus`}>
        <nav id="menu" className="navbar navbar-expand-md">
            <a href="#home" className="navbar-brand" data-menuanchor="home">
                <img src={logo} alt="icon" className="brand__logo"/>
                <span className="brand__name">Jeunesse Constructive</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li data-menuanchor="home" className="nav-item active">
                        <a className="nav-link" href="#home">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"#mooc241"}>Formation241</a>
                    </li>
                    <li data-menuanchor="about" className="nav-item">
                        <a className="nav-link" href="#about">Réalisations</a>
                    </li>
                    <li data-menuanchor="actus" className="nav-item">
                        <a className="nav-link" href="#actus">Actualités</a>
                    </li>
                    <li data-menuanchor="contact" className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"myaccount"}>Mon Compte</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <a className={"user__icon"} href="#myaccount"><img src={accountIcon} alt="user icon"/></a>
        <button onClick={onClick} className="toggle-btn">
            <span className="hamburger hamburger-1"/>
            <span className="hamburger hamburger-2"/>
            <span className="hamburger hamburger-3"/>
        </button>
    </div>
);

export default Navbar;