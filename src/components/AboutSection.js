import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel, { consts } from 'react-elastic-carousel';
import './About.css';
import imgPlaceholder from "../Jouez-et-gagnez.jpg"

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

            </section>
        );
    }
}

const ArticleCarroussel = ({items, itemToShow, onChange}) => (
    <Carousel itemsToShow={itemToShow} onChange={onChange} showArrows={false} breakPoints={[
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
            <a href="#" key={item.id} className="slider__item">
                <img src={item.imgUrl} alt={item.title}/>
                <h2>{item.title}</h2>
                <a href="#">
                    Voir plus
                </a>
            </a>
        ))}
    </Carousel>
)


AboutSection.propTypes = {};

export default AboutSection;