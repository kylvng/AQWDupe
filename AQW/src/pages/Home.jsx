import React from 'react';
import aqw from "../images/aqw-logo.png";
import yulgar from "../images/yulgar.png";

function Home() {
    return (
        <div className='home'>
            <div className='aqw-logo'>
                <img src={aqw} alt="AQW Logo" className="logo" />
            </div>
            <div className='home-text'>
            <h1>Are You Ready to Embark on a Journey?</h1>
            <h3>Create a Hero and Experience Nonstop Action and Adventure!</h3>
            </div>
        </div>
    );
}

export default Home;
