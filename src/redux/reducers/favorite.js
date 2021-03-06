import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  favorites: [],
  errors: null,
};

export default function favorites(state = initialState, action) {
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
        favorites: [...state.favorites, action.payload],
      };
    case types.REMOVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favorites: [...action.payload],
      };
    case types.FETCH_ALL_FAVOURITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favorites: action.payload,
      };
    case types.FAVOURITE_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
}
