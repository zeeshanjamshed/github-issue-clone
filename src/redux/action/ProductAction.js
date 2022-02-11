import axios from "axios";
import {baseURL} from "../../helper/Api"
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "../contains/actionTypes";

export const fetchPostRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
   };

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: posts
  }
};

export const fetchPostError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
};

export function fetchPosts () {
  return function (dispatch) {
    dispatch(fetchPostRequest())
    axios
      .get(baseURL + "/users")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostError(error.message));
      });
  }
};
