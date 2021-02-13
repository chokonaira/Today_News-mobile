import * as types from "../actions/types";

const initialState = {
  loading: false,
  newUser: {},
  isAuthenticated: false,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        newUser: action.payload,
        isAuthenticated: true,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        newUser: action.payload,
      };
    default:
      return state;
  }
};
