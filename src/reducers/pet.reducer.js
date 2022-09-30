import {useReducer} from "react";

const init = {
    cats: [],
    dogs: []
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD' : {
            const petKey = action.payload.pet + 's';
            return {
                ...state,
                [petKey]: [...state[petKey], action.payload.name]
            };
        }
        case 'DELETE' : {
            const petKey = action.payload.pet + 's';

            return {
                ...state,
                [petKey]: [...state[petKey].filter((pet, index) => index !== action.payload.id)]
            };
        }
    }
};

const usePetReducer = () => useReducer(reducer, init);

export {
    usePetReducer
};