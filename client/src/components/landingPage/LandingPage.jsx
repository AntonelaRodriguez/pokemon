import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';
import landing from '../../assets/landing.gif'
import logo from '../../assets/IPokemon.png'

const LandingPage = () => {
    return(
        <div className="landing">
            <img className="landing-logo" src={logo} alt="" />
            <h1>Let's discover them all! Click <Link to='/home'>here</Link> to start...</h1>
            <img src={landing} alt="" />
        </div>
    );
};
export default LandingPage;