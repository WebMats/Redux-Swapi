// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_SUCCEEDED = "FETCH_SUCCEEDED";
export const FETCH_FAILED = "FETCH_FAILED";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


const postData = (data) => {
    return {
        type: FETCH_SUCCEEDED,
        data: data
    }
}

const fetchFailed = () => {
    return {
        type: FETCH_FAILED 
    }
}

const fetchingData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const fetchData = () => dispatch => {
    dispatch(fetchingData())
    axios.get('https://swapi.co/api/people/').then(res => {
        return dispatch(postData(res.data.results))
    }).catch(err => {
        console.log(err) 
        return dispatch(fetchFailed())
    })
}