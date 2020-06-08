import React, {Component} from 'react';
import Carousel from "react-elastic-carousel";
import {Link} from "react-router-dom";
import "./Actus.css";
import  imgPlaceholder from  "../Jouez-et-gagnez.jpg"

class ActusSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', text: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant...", imgUrl: imgPlaceholder},
                {id: 2, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', text: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant...", imgUrl: imgPlaceholder},
                {id: 3, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', text: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant...", imgUrl: imgPlaceholder},
                {id: 4, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', text: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant...", imgUrl: imgPlaceholder},
                {id: 5, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', text: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant...", imgUrl: imgPlaceholder},
            ]
        }
    }

    render() {
        return (
            <section className={"actus"} data-anchor="actus">
                   <h2 className="actus__title">Actualités...</h2>
                <div className="slider__container">
                    <ArticlesSlider itemToShow={3} items={this.state.items} />
                </div>
            </section>
        );
    }
}


const ArticlesSlider = ({ items, itemToShow }) => (
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
                <div className="slider__image">
                    <img src={item.imgUrl} alt={item.title}/>
                </div>
                <div className="slider__contain">
                    <h2 className={"slider__title"}>{item.title}</h2>
                    <p className={"slider__text"}>
                        {item.text}
                    </p>
                    <a href={item.id} className="slider__link">Voir plus <span className={"border-1"}/><span className={"border-2"}/></a>
                </div>
            </Link>
        ))}
    </Carousel>
)


export default ActusSection;