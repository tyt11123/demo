import {DATA_LOADED, API_GET_FAILED} from './constants';

const initialState = {
    number: 0,
    people: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_LOADED:
            return Object.assign({}, state,
                {number: action.payload.data.number,
                people: state.people.concat(action.payload.data.people)});
        case API_GET_FAILED:
            return Object.assign({}, state,
                {number: -1,
                people: state.people.concat({
                    craft: "API_ERROR",
                    name: "API_ERROR"
                })});
        default:
            return state;
    };
};

export default rootReducer;