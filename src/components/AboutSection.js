import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel, { consts } from 'react-elastic-carousel';
import './About.css';

class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
                {id: 2, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
                {id: 3, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
                {id: 4, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
                {id: 5, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
                {id: 6, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
                {id: 7, title: 'Lancement du jeu concours "Entreprendre Gabon"', imgUrl: "https://lh3.googleusercontent.com/proxy/S_TETmXpK2onMmIAJ1FH6lDIXAPaRC_P4LYlSojSL5xm0dWJgRKeQN31Us5sa6x4Y1GsUpn8yKy04sdCr2iuYpDDvvE0H1HBmdz0ZeNGScJkulVWnHGGniB1vUmDVtY"},
            ]
        }
    }

    myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '👈' : '👉'
        return (
            <div onClick={onClick}>
                {pointer}
            </div>
        )
    }

    componentDidMount() {
        this.displayActive()
    }

    displayActive  = () => {
        const currentActiveSlides = document.querySelectorAll('[tabindex="0"]');
        currentActiveSlides.forEach(item => item.classList.remove("isActive"));
        currentActiveSlides[1].classList.add("isActive")
    }

    render() {
        return (
            <section data-anchor="about">
                <div className="row">
                    <div className="col-12 about__title">
                        <h1>Qui <br/> Sommes-nous...</h1>
                        <p>
                            La plateforme jeunesse constructive est une
                            création des membres de la dispora Gabonaise
                            <br/>résidant en France et animés par le souhait de
                            contribuer au à l’engagement citoyen sur les défis <br/>
                            de développement du Gabon.
                        </p>
                    </div>
                    <div className="col-12 about__content h-100">
                        <h2>Nos derniers <br/> actions</h2>
                        <div className="slider-wrapper">
                            <ArticleCarroussel items={this.state.items} arrow={this.myArrow} itemToShow={2} onChange={this.displayActive} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const ArticleCarroussel = ({items, arrow, itemToShow, onChange}) => (
    <Carousel renderArrow={arrow} itemsToShow={itemToShow} onChange={onChange}>
        {items.map(item => (
            <div key={item.id} className="slider__item">
                <img src={item.imgUrl} alt={item.title}/>
                <h2>{item.title}</h2>
                <a href="#">
                    Voir plus
                </a>
            </div>
        ))}
    </Carousel>
)


AboutSection.propTypes = {};

export default AboutSection;