import axios from 'axios';

export const fetchHouse = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_HOUSE_START' });
        axios  
        .get('http://hp-api.herokuapp.com/api/characters/house/')
        .then(res => {
            console.log('response', res);
            dispatch({ type: 'FETCH_HOUSE_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_HOUSE_FAILURE',
                payload: `Error ${err.res.status}: ${err.res.data}`
            });
        });
    };
};
