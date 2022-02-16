import axios from "axios";
import { baseURL } from "../../helper/Api";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "../contains/actionTypes";

export const fetchPostRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchPostError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

export function fetchPosts(page, rowsPerPage) {
  return function (dispatch) {
    dispatch(fetchPostRequest());
    axios
      .get(
        baseURL +
          `/search/issues?q=create-react-app&page=${page}&per_page=${rowsPerPage}`
      )
      .then((response) => {
        const { data } = response;
        dispatch(fetchPostSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchPostError(error.message));
      });
  };
}
