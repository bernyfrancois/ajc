import React, { Component } from "react";
import cdImg from "../cdi.png";
import logo from "../logo.png";
import "./Home.css";

class HomeSection extends Component {
    render() {
        return (
            <section className={"home"} data-anchor="home">
                <div className="zone1">
                    <div className="zone1__container">
                        <div className="zone1__logo">
                            <img src={logo} alt="association jeunesse constructive" className="img-fluid"/>
                        </div>
                        <a data-menuanchor="actus" href="#actus"className="zone1__link blue">
                            Actualités
                            <span className="border-1" />
                            <span className="border-2" />
                        </a>
                        <a data-menuanchor="about" href="#about" className="zone1__link green">
                            Actions
                            <span className="border-1" />
                            <span className="border-2" />
                        </a>
                        <a data-menuanchor="about" href="#about" className="zone1__link yellow">
                            AJC
                            <span className="border-1" />
                            <span className="border-2" />
                        </a>
                    </div>
                </div>
                <div className="zone2">
                    <div className="zone2__container">
                        <h1 className={"zone2__title"}>Jeunesse Constructive</h1>
                        <a href="#" className="zone2__join">Rejoignez Nous</a>
                        <div className="slogan__illustration">
                            <img src={cdImg} alt="illustration" className="zone2__sloganImg"/>
                            <h2 className={"slogan__title"}>CDI</h2>
                        </div>
                    </div>
                    <div className={"zone2__slogan"}><span>Citoyen à Durée Indéterminé</span></div>
                </div>
            </section>
        );
    }
}


export default HomeSection;