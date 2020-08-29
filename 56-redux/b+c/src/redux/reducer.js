import {ADD_LINK_ACTION, CLEAR_LINK_ACTION, REMOVE_LINK_ACTION} from "./constants";

const initialState = {
  linksReducer: [],
};

const rootReducer = (state = initialState, action /* add additional parameters here */) => {
  // Use switch to handle different actions
  switch (action.type) {
    case ADD_LINK_ACTION:
      return {
        linksReducer: state.linksReducer.concat([action.link]), // Use concat to add a new link
      };
    case CLEAR_LINK_ACTION:
      return {
        linksReducer: [], // Reset the links
      };
    case REMOVE_LINK_ACTION:
      let newLinks = [...state.linksReducer];
      newLinks.splice(0, 1);
      return {
        linksReducer: newLinks
      };
    default:
      return state; // Do not change the state in case of any other actions
  }
};

export default rootReducer;