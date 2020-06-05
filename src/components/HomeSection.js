import React, { Component } from "react";
import cdImg from "../cdi.png";
import logo from "../logo.png";
import "./Home.css";
import {NavLink} from "react-router-dom";

class HomeSection extends Component {
    render() {
        return (
            <section className={"home"} data-anchor="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="title col-md-6 col-sm-12 position-relative">
                            <div className="title-container">
                                <h1>Rejoignez la communauté</h1>
                                <p>Authoritatively unleash adaptive e-tailers through error-free e-markets. Energistically incentivize team driven initiatives via cross-platform experiences. Collaboratively.</p>
                                <img className="logo" src={logo} alt="logo ajc"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 join">
                            <p className="join__text">Devenez vous aussi des Citoyens à Durée Indéterminé</p>
                            <a href="#" className="join__button">Rejoindre le mouvement</a>
                            <img className="cdi__img" src={cdImg} alt="illustration"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default HomeSection;