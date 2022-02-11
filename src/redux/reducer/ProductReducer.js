import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "../contains/actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
