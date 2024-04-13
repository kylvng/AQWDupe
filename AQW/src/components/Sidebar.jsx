import React from 'react';
import { Link } from 'react-router-dom';
import gif from "../images/aqw-gif.gif";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-buttons'>
                <Link to={`/`}><button>Home</button></Link>
                <Link to={`/create`}><button>Create a Character!</button></Link>
                <Link to={`/characters`}><button>Hero's Tavern</button></Link>
            </div>
            <div className='gif-container'>
                <img src={gif} alt="gif" className="gif" />
            </div>
        </div>
    );
}

export default Sidebar;
