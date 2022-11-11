import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';

export default function LandingPage(){
    return(
        <div>
            <h1>Let's discover them all!</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}