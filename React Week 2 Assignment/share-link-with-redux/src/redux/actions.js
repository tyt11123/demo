const axios = require('axios');
const qs = require('qs');
export const ADD_LINK_SUCCESS_ACTION = 'ADD_LINK_SUCCESS_ACTION';
export const ADD_LINK_FAILURE_ACTION = 'ADD_LINK_FAILURE_ACTION';
export const CLEAR_LINK_SUCCESS_ACTION = 'CLEAR_LINK_SUCCESS_ACTION';
export const CLEAR_LINK_FAILURE_ACTION = 'CLEAR_LINK_FAILURE_ACTION';
export const LOAD_LINK_SUCCESS_ACTION = 'LOAD_LINK_SUCCESS_ACTION';
export const LOAD_LINK_FAILURE_ACTION = 'LOAD_LINK_FAILURE_ACTION';

export function loadLinkSuccessActionCreator(links) {
    return {
        type: LOAD_LINK_SUCCESS_ACTION,
        links: links,
    };
}

export function loadLinkFailureActionCreator() {
    return {
        type: LOAD_LINK_FAILURE_ACTION,
    };
}

export function loadLinkThunk() {
    return (dispatch) => {
        return axios.get("http://localhost:2031/links")
        .then((res) => {
            let something = res.data;
            something.forEach((a) => {a.tags = JSON.parse(a.tags);});
            let links = something.map((t) => ({
            title: t.title,
            url: t.url,
            tags: t.tags
            }));
            dispatch(loadLinkSuccessActionCreator(links));
        })
        .catch((err) => {
            console.log("Failed", err);
            dispatch(loadLinkFailureActionCreator());
        });
    };
};

export function addLinkSuccessActionCreator(obj) {
    return {
        type: ADD_LINK_SUCCESS_ACTION,
        payload: obj,
    };
}

export function addLinkFailureActionCreator() {
    return {
        type: ADD_LINK_FAILURE_ACTION,
    };
}

export function addLinkThunk(obj) {
    return (dispatch) => {
        return axios.post("http://localhost:2031/link",
        qs.stringify(obj),
        {headers:{'Content-Type': 'application/x-www-form-urlencoded',}})
        .then((res) => {
            let obj2 = {...obj};
            obj2.tags = JSON.parse(obj2.tags);
            dispatch(addLinkSuccessActionCreator(obj2));
        })
        .catch((err) => {
            console.log("Failed", err);
            dispatch(addLinkFailureActionCreator());
        });
    };
};

export function clearLinkSuccessActionCreator(index) {
    return {
        type: CLEAR_LINK_SUCCESS_ACTION,
        index: index,
    };
}

export function clearLinkFailureActionCreator() {
    return {
        type: CLEAR_LINK_FAILURE_ACTION,
    };
}

export function clearLinkThunk(index) {
    return (dispatch) => {
        return axios.delete("http://localhost:2031/link",
        {params: {index}})
        .then((res) => {
            dispatch(clearLinkSuccessActionCreator(index));
        })
        .catch((err) => {
            console.log("Failed", err);
            dispatch(clearLinkFailureActionCreator());
        });
    };
};