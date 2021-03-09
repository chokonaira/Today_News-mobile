import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  comments: [],
  errors: null,
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case types.COMMENTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, action.payload],
      };
    case types.FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case types.COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
}
