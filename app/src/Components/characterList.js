import React, { useEffect } from 'react';
import { fetchHouse } from '../store/Actions/houseActions';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';


const CharacterList = props => {
    useEffect(() => {
        props.fetchHouse();
    }, []);

    // if (props.isFetching) {
    //     return <Loader />;
    // }

    return (
        <>
        <div className='listContainer'>
            <button onClick={props.fetchHouse}>Get A House</button>
            {/* {props.isFetching && (
                <Loader type="Circles" color="#00BFFF" height={100} width={100} />
            )} */}
            {props.house && <h2>{props.house}</h2>}
            {/* {props.error && <p className="error">{props.error}</p>} */}

        </div>
        </>
    )
};

const mapStateToProps = state => {
    console.log('STATE', state);
    return {
        house: state.house.house,
        isFetching: state.house.isFetching,
        error: state.house.error
    }
}
export default connect(
    mapStateToProps,
    { fetchHouse }
)(CharacterList);