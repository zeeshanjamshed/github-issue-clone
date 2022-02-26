// import axios from "axios";
// import { baseURL } from "../../helper/Api";
// import {
//   FETCH_USER_REQUEST,
//   FETCH_USER_SUCCESS,
//   FETCH_USER_ERROR,
// } from "../contains/actionTypes";

// export const fetchPostRequest = () => {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// };

// export const fetchPostSuccess = (data) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: data,
//   };
// };

// export const fetchPostError = (error) => {
//   return {
//     type: FETCH_USER_ERROR,
//     payload: error,
//   };
// };

// export function fetchPosts() {
//   return function (dispatch) {
//     dispatch(fetchPostRequest());
//     axios
//       .get(
//         baseURL +
//           `/search/issues?q=create-react-app`
//       )
//       .then((response) => {
//         const { data } = response;
//         dispatch(fetchPostSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchPostError(error.message));
//       });
//   };
// }

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      data: data
    },
  };
};

export const deleteTodo = (ind) => {
  return {
    type: "DELETE_TODO",
    payload: {ind }
  };
};

export const updateTodo = (element) => {
  return {
    type: "UPDATED_TODO",
    payload: {
      element
    }
  };
};