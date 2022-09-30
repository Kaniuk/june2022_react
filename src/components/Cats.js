import React, {useRef} from 'react';

import {usePetReducer} from "../reducers";

const pet = 'cat';
const Cats = () => {
    const catFormInput = useRef();
    const [state, dispatch] = usePetReducer();
    const addHandle = () => {
        const {value: name} = catFormInput.current;
        dispatch({type: 'ADD', payload: {name, pet}});
        catFormInput.current.value = '';
    };
    const removeCat = (id) => {
        dispatch({type: 'DELETE', payload: {id, pet}});
    };

    return (
        <div className={'list'}>
            <div>
                <input type="text" ref={catFormInput}/>
                <button onClick={addHandle}>Add cat</button>
            </div>
            {state.cats.map((catName, index) => (
                <div key={index}>
                    {catName}
                    <button onClick={() => removeCat(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cats;