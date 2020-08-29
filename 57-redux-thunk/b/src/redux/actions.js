import axios from 'axios';
import {DATA_LOADED, API_GET_FAILED} from './constants';

export function getAstroMDP() {
    return (dispatch) => {
        return axios.get("http://api.open-notify.org/astros.json")
        .then(res => {
            dispatch({
                type: DATA_LOADED,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: API_GET_FAILED
            })
        });
    }
}