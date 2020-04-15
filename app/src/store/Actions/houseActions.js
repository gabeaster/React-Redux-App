import axios from 'axios';

export const fetchHouse = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_HOUSE_START' });
        axios  
        .get('https://www.potterapi.com/v1/sortingHat')
        .then(res => {
            console.log('House from sortingHat call is...', res.data);
            dispatch({ type: 'FETCH_HOUSE_SUCCESS', payload: res.data.house })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_HOUSE_FAILURE',
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};
