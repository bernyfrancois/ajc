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
                {id: 1, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', description: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant", imgUrl: imgPlaceholder},
                {id: 2, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', description: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant", imgUrl: imgPlaceholder},
                {id: 3, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', description: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant", imgUrl: imgPlaceholder},
                {id: 4, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', description: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant", imgUrl: imgPlaceholder},
                {id: 5, title: 'Le lauréat du jeu concours entreprendre au Gabon bientot', description: "La plateforme jeunesse constructive est une création des membres de la dispora Gabonaise résidant", imgUrl: imgPlaceholder},
            ]
        }
    }

    render() {
        return (
            <section data-anchor="actus">

            </section>
        );
    }
}


const ArticlesSlider = ({items, itemToShow, onChange}) => (
    <Carousel itemsToShow={itemToShow} onChange={onChange} showArrows={false} breakPoints={[
        {width: 400, itemsToShow: 1,},
        {width: 600, itemsToShow: 2,},
        {width: 1200, itemsToShow: 4,},
    ]}>
        {items.map(item => (
            <div key={item.id} className="actus__item">
                <div className={"actus__img"}>
                    <img src={item.imgUrl} alt={item.title}/>
                </div>
                <div className="actus__body">
                    <h2 className={"actus__title"}>{item.title}</h2>
                    <p className="actus__description">
                        {item.description}
                    </p>
                </div>
                <div className="actus__footer">
                    <Link href="#">Voir plus</Link>
                </div>
            </div>
        ))}
    </Carousel>
)


export default ActusSection;