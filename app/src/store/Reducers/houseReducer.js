const initialState = {
    house: '',
    isFetching: false,
    characterList: [],
    error: ''
}

export const houseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_HOUSE_START':
            return{
                ...state,
                isFetching: true
            };
        case 'FETCH_HOUSE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                //update state here with correct data
                error: ''
            };
        case 'FETCH_HOUSE_FAILURE' :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: 
        return state;
    }
};