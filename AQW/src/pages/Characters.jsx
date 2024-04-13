import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const { data, error } = await supabase
                .from('characters')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error fetching characters:', error.message);
            } else {
                setCharacters(data);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className='characters-container'>
            <div className='characters-text'> 
                <h1>Welcome to the Hero's Tavern!</h1>
                <p>So this is where Heroes rest?!</p>
            </div>
            <div className='cards-grid'>
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
}

export default Characters;
