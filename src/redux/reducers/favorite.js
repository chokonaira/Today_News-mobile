import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  favouriteArticle: [],
  removedFavorite: [],
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
        favouriteArticle: [...state.favouriteArticle, action.payload],
      };
    case types.ADD_FAVOURITE_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
      case types.REMOVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        removedFavorite: action.payload,
      };
      case types.REMOVE_FAVOURITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
}
