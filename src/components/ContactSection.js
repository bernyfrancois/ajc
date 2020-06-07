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

            </section>
        );
    }
}

export default ContactSection;