import React, {useRef} from 'react';

import {usePetReducer} from "../reducers";

const pet = 'dog';
const Dogs = () => {
    const dogFormInput = useRef();
    const [state, dispatch] = usePetReducer();
    const addHandle = () => {
        const {value: name} = dogFormInput.current;
        dispatch({type: 'ADD', payload: {name, pet}});
        dogFormInput.current.value = '';
    };
    const removeDog = (id) => {
        dispatch({type: 'DELETE', payload: {id, pet}});
    };

    return (
        <div className={'list'}>
            <div>
                <input type="text" ref={dogFormInput}/>
                <button onClick={addHandle}>Add dog</button>
            </div>
            {state.dogs.map((dogName, index) => (
                <div key={index}>
                    {dogName}
                    <button onClick={() => removeDog(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Dogs;