import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Contact.css";
import  logo from "../logo.png";
import fbIcon from "../facebook.svg";
import telIcon from "../phone.svg";
import mailIcon from "../mail.svg"

class ContactSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parteners: [
                {
                    img: logo,
                    link: "organeus.tech",
                },
                {
                    img: logo,
                    link: "organeus.tech",
                },
                {
                    img: logo,
                    link: "organeus.tech",
                },
                {
                    img: logo,
                    link: "organeus.tech",
                }
            ]
        }
    }
    render() {
        return (
            <section className={"contact"} data-anchor="contact">
                <div className="contact__header">
                    <h1>Partenaires <br/> officiels...</h1>
                </div>
                <div className="contact__parteners">
                    <div className={"parteners"}>
                        {this.state.parteners.map((item, index) => (
                            <a key={index} href={item.link}>
                                <img src={item.img} alt="logo"/>
                            </a>
                        ))}
                    </div>
                </div>
                <footer>
                    <div className="row">
                        <div className="col-7 footer__links">
                            <h2>Nous contacter</h2>
                            <a href="#">
                                <img className="icon" src={fbIcon} alt="icon"/>
                                <span className="text">Jeunesse constructive</span>
                            </a>
                            <a href="#">
                                <img className="icon" src={telIcon} alt="icon"/>
                                <span className="text">+2417865429</span>
                            </a>
                            <a href="contact@jeunesseconstructive.com">
                                <img className="icon" src={mailIcon} alt="icon"/>
                                <span className="text">contact@ajc.com</span>
                            </a>
                        </div>
                        <div className="col-5 footer__menu">
                            <ul>
                                <li data-menuanchor="actus">
                                    <a href="#actus">Actualités</a>
                                </li>
                                <li>
                                    <Link to={"mentions"}>Mentions légales</Link>
                                </li>
                                <li>
                                    <Link to={"cgv"}>CGV</Link>
                                </li>
                                <li>
                                    <Link to={"confidentialite"}>Confidentialité</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row credits">
                        <div className="col col-12">
                            <p>
                                Droit d'auteur © 2020, JEUNESSE CONSTRUCTIVE. <br/>
                                ORGANÉUS, Agence Web Marketing D igital depuis 2017. <br/>
                                ORGANÉUS vous accompagne dans vos projet de Web, de Marketing et de Croissance.
                            </p>
                        </div>
                    </div>
                </footer>
            </section>
        );
    }
}

export default ContactSection;