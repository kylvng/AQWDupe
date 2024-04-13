import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Card({ character }) {
    return (
        <div className="card">
            <img src={character.imageUrl} alt="Character" style={{ width: '120px', height: '170px' }} />
            <h3>{character.name}</h3>
            <p>Level: {character.level}</p>
            <p>Class: {character.class}</p>
            <Link to={'/characters/edit/'+ character.id}><button>Edit</button></Link>
        </div>
    );
}

export default Card;
