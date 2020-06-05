import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AboutSection extends Component {
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
                    </div>
                </div>
            </section>
        );
    }
}

AboutSection.propTypes = {};

export default AboutSection;