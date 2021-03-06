import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.min.css'
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ActusSection from "./components/ActusSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

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
            <div className={`App curtain ${this.state.displayMobileNav ? 'displayMobile' : ''}`}>
                <Router>
                    <header>
                        <Navbar onClick={this.toggleMobileNav} mobileState={this.state.displayMobileNav}/>
                    </header>
                    <div className="cr mobile-menu">
                        <MobileNav onClick={this.toggleMobileNav}/>
                    </div>
                    <div className="main-container">
                        <FullPage/>
                    </div>
                </Router>
            </div>
        );
    }
}

const FullPage = () => (
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
        render={(fullpageApi) => {
            return (
                <ReactFullpage.Wrapper>
                    <HomeSection />
                    <AboutSection/>
                    <ActusSection/>
                    <ContactSection/>
                </ReactFullpage.Wrapper>
            );
        }}
    />
)

export default App;