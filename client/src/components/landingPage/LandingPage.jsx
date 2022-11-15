import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';

const LandingPage = () => {
    return(
        <div>
            <h1>Let's discover them all!</h1>
            <Link to='/home'>
                <button>Find them</button>
            </Link>
        </div>
    );
};
export default LandingPage;