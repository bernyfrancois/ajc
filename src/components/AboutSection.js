import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel, { consts } from 'react-elastic-carousel';
import './About.css';
import imgPlaceholder from "../Jouez-et-gagnez.jpg"
import {Link} from "react-router-dom";

class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
                {id: 2, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
                {id: 3, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
                {id: 4, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
                {id: 5, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
                {id: 6, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
                {id: 7, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: imgPlaceholder},
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <section className={"about"} data-anchor="about">
                <div className="zone1">
                    <h2 className={"zone1__title"}>Qui sommes-nous ?...</h2>
                    <div className="zone1__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores commodi nesciunt nostrum possimus sapiente similique!
                    </div>
                </div>
                <div className="zone2">
                    <h2 className={"zone2__title"}>Nos actions...</h2>
                    <ArticleCarroussel items={this.state.items} itemToShow={3}/>
                </div>
            </section>
        );
    }
}

const ArticleCarroussel = ({items, itemToShow}) => (
    <Carousel itemsToShow={itemToShow} showArrows={false} breakPoints={[
        {
            width: 400,
            itemsToShow: 1,
        },
        {
            width: 600,
            itemsToShow: 3,
        }
    ]}>
        {items.map(item => (
            <Link to={`${item.id}`} key={item.id} className="slider__item">
                <img className={"slider__image"} src={item.imgUrl} alt={item.title}/>
                <div className="slider__overlay">
                    <h2>{item.title}</h2>
                </div>
                <a href={item.id} className="slider__link">Voir plus <span className={"border-1"}/><span className={"border-2"}/></a>
            </Link>
        ))}
    </Carousel>
)


AboutSection.propTypes = {};

export default AboutSection;