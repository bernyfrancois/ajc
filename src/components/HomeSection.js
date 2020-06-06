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
                        <div className="title col-md-7 col-sm-12 position-relative">
                            <div className="title-container">
                                <h1>Promouvoir <br/>le potentiel <br/> Gabonais</h1>
                                <p> L’association jeunesse constructive à pour but
                                    de promouvoir le potentiel Gabonais.</p>
                                <p> Et de permettre à au gabon partout dans le
                                    monde de contribuer au développement de
                                    notre patrie.</p>
                                <img className="logo" src={logo} alt="logo ajc"/>
                                <a data-menuanchor="about" href="#about" className="title__link title__link__green"><span/>AJC</a>
                                <a data-menuanchor="actus" href="#actus" className="title__link title__link__blue"><span/>Actus</a>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 join">
                            <p className="join__text">Deviens toi aussi <br/> un Citoyen à Durée Indéterminé</p>
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