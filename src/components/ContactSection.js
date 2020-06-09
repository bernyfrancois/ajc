import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Contact.css";
import  logo from "../logo.png";
import fbIcon from "../facebook.svg";
import telIcon from "../phone.svg";
import mailIcon from "../mail.svg"
import Carousel from "react-elastic-carousel";

class ContactSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parteners: [
                {
                    id: 0,
                    img: logo,
                    link: "organeus.tech",
                },
                {
                    id: 1,
                    img: logo,
                    link: "organeus.tech",
                },
                {
                    id: 2,
                    img: logo,
                    link: "organeus.tech",
                },
                {
                    id: 3,
                    img: logo,
                    link: "organeus.tech",
                }
            ]
        }
    }
    render() {
        return (
            <section className={"contact"} data-anchor="contact">
                <div className="main__contain">
                    <h2 className={"main__title"}>Nos partenaires...</h2>
                    <div className="slider__container">
                        <PartnerSlider items={this.state.parteners} itemToShow={4}/>
                    </div>
                </div>
                <footer>
                    <h2 className="footer__title">Nous contacter...</h2>
                    <ul className={"footer__icons"}>
                        <li><a href="#"><img src={fbIcon} alt="icon"/></a></li>
                        <li><a href="#"><img src={telIcon} alt="icon"/></a></li>
                        <li><a href="#"><img src={mailIcon} alt="icon"/></a></li>
                        <li><a href="#"><img src={fbIcon} alt="icon"/></a></li>
                    </ul>
                    <ul className={"footer__menu"}>
                        <li>
                            <Link to={"#"}>Nous rejoindre</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Mentions légales</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Confidentialité</Link>
                        </li>
                    </ul>
                    <p className={"footer__credits"}>
                        Droit d'auteur © 2020, JEUNESSE CONSTRUCTIVE. <br/>
                        ORGANÉUS, ageence WebMarketing digital depuis 2017. <br/>
                        ORGANÉUS vous accompagne dans vos projet de Web, de Marketing et de Croissance.
                    </p>
                </footer>
            </section>
        );
    }
}

const PartnerSlider = ({ items, itemToShow }) => (
    <Carousel itemsToShow={itemToShow} showArrows={false} breakPoints={[
        {
            width: 400,
            itemsToShow: 1,
        },
        {
            width: 600,
            itemsToShow: 2,
        },
        {
            width: 1000,
            itemsToShow: 3,
        }
    ]}>
        {items.map(item => (
            <div key={item.id} className="contact__slider__item">
                <div className="contact__slider__contain">
                    <h2 className={"contact__slider__title"}>{item.id}</h2>
                    <p className={"contact__slider__text"}>
                        {item.id}
                    </p>
                    <a href={item.id} className="contact__slider__link">Voir plus <span className={"border-1"}/><span className={"border-2"}/></a>
                </div>
                <div className="contact__slider__image">
                    <img src={item.img} alt={item.id}/>
                </div>
            </div>
        ))}
    </Carousel>
)


export default ContactSection;