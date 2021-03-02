import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  favouriteBooks: [],
  errors: null,
};

export default function favorite(state = initialState, action) {
  switch (action.type) {
    case types.FAVOURITE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_FAVOURITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favouriteBooks: [...state.favouriteBooks, action.payload],
      };
    case types.ADD_FAVOURITE_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
}
