// import {
//   FETCH_USER_REQUEST,
//   FETCH_USER_SUCCESS,
//   FETCH_USER_ERROR,
// } from "../contains/actionTypes";

// const initialState = {
//   issueAPiData: {},
//   loading: false,
//   error: null
// };

// const postReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case FETCH_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         issueAPiData: action.payload,
//       };

//     case FETCH_USER_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default postReducer;

const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
      // case "UPDATED_TODO":
      // console.log(action?.payload, "data");

      // const result = state.list;
      // result.map((value) =>
      //   value.data.id === action?.payload?.element?.id
      //     ? (value.data = action.payload.element)
      //     : value.data
      // );
    case "DELETE_TODO":
      const updatedArray = [...state.list];
      console.log(updatedArray ,  "array")
      return {
        ...state,
        list: updatedArray?.filter(
          (element) => element.ind !== action?.payload?.ind
        ),
      };
    
    default:
      return state;
  }
};

export default todoReducers;
