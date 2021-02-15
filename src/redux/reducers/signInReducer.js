import * as types from "../actions/types";

const initialState = {
  loading: false,
  existingUser: [],
  errors: null
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        existingUser: action.payload,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
