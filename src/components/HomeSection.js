import React, { Component } from "react";
import cdImg from "../cdi.png";
import logo from "../logo.png";
import "./Home.css";

class HomeSection extends Component {
    render() {
        return (
            <section className={"home"} data-anchor="home">
                <div className="section__back">
                    <div className="cdi__img">
                        <img src={cdImg} alt="illustration"/>
                    </div>
                </div>
                <div className="section__contain">
                    <div className={"top__contain"}>
                        <span className="circle circle__green">
                            <div className={"title"}>
                                <h1>"<br/> Promouvoir <br/>le potentiel Gabonais ”</h1>
                                <div className="ajc__logo">
                                    <img src={logo} className={"img-fluid"}/>
                                </div>
                            </div>
                            <p>
                                L’association jeunesse constructive à pour but
                                de promouvoir le potentiel Gabonais
                            </p>
                            <p>
                                Et de permettre à au gabon partout dans le
                                monde de contribuer au développement de
                                notre patrie.
                            </p>
                        </span>
                        <span className="custom-circle circle__yellow"><a data-menuanchor="actus">Actus</a></span>
                        <span className="custom-circle circle__blue"><a data-menuanchor="about">Ajc</a></span>
                    </div>
                    <div className="bottom__contain">
                        <p>
                            Deviens toi aussi un <br/>
                            Citoyen à Durée Indéterminée
                        </p>
                        <a href="#" className="button__join">
                            Rejoindre le mouvement
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}


export default HomeSection;