import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.min.css'
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ActusSection from "./components/ActusSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMobileNav: false,
        }
    }

    // arrow func for bind this
    toggleMobileNav = () => {
        this.setState({
            displayMobileNav: !this.state.displayMobileNav
        })
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <header>
                        <Navbar onClick={this.toggleMobileNav} mobileState={this.state.displayMobileNav}/>
                    </header>
                    <ReactFullpage
                        //fullpage options
                        licenseKey = {'YOUR_KEY_HERE'}
                        scrollingSpeed = {1000}
                        navigation ={true}
                        menu ={["#menu", "#mobile-menu"]}
                        lazyLoading ={true}
                        keyboardScrolling ={true}
                        controlArrows ={true}
                        sectionSelector={'section'}
                        verticalCentered={false}
                        paddingTop={'3.5em'}
                        render={({state, fullpageApi}) => {
                            return (
                                <ReactFullpage.Wrapper>
                                    <HomeSection/>
                                    <AboutSection/>
                                    <ServiceSection/>
                                    <ActusSection/>
                                    <ContactSection/>
                                </ReactFullpage.Wrapper>
                            );
                        }}
                    />
                </Router>
            </div>
        );
    }
}
export default App;
