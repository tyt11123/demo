import {
    ADD_LINK_SUCCESS_ACTION,
    ADD_LINK_FAILURE_ACTION,
    CLEAR_LINK_SUCCESS_ACTION,
    CLEAR_LINK_FAILURE_ACTION,
    LOAD_LINK_SUCCESS_ACTION,
    LOAD_LINK_FAILURE_ACTION,
} from "./actions";

const initialState = {
    stuff: [],
    hidden: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LINK_SUCCESS_ACTION:
            return {
                stuff: [...state.stuff, action.payload],
            };
        case ADD_LINK_FAILURE_ACTION:
            return state;
        case LOAD_LINK_SUCCESS_ACTION:
            return {
                stuff: action.links, // Use concat to add new links
            };
        case LOAD_LINK_FAILURE_ACTION:
            return {
                stuff: [{title:"API fetch fail", url:"API fetch fail", tags: ["Fail"]}], // Reset the links
            };
        case CLEAR_LINK_SUCCESS_ACTION:
            let things = [...state.stuff];
            things.splice(action.index, 1);
            return {
                stuff: things,
            };
        case CLEAR_LINK_FAILURE_ACTION:
            return state;
        default:
            return state;
    }
};

export default rootReducer;