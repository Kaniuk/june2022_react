import React, {useEffect, useState} from 'react';

import {getRickAndMortyList} from "../../../services/RickAndMortyServices";
import SingleCharacter from "../singleCharacter/SingleCharacter";
import './Characters.css';

const Characters = () => {

    let [rickAndMorty, setRickAndMorty] = useState([]);

    useEffect(() => {
        getRickAndMortyList().then(({info, results}) => {
            setRickAndMorty(results.slice(0, 6));
        });
    }, []);
    return (
        <>
            <h1>Rick And MortyList</h1>
            <div className={'characters'}>
                {rickAndMorty.map(value => <SingleCharacter key={value.id} item={value}/>)}
            </div>
        </>
    );
};

export default Characters;