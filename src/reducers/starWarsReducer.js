import {FETCHING_DATA, FETCH_SUCCEEDED, FETCH_FAILED} from "../actions";
const initialState = {
  characters: [],
  error: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_DATA: 
      return {...state, error: null, fetching: true}
    case FETCH_SUCCEEDED:
      return {characters: action.data, error: null, fetching: false};
    case FETCH_FAILED: 
      return {...state, error: 'Fetch request failed', fetching: false}
    default:
      return state;
  }
};
