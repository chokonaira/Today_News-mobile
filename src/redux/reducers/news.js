import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  isNewsFetched: false,
  news: [],
  errors: null,
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case types.NEWS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isNewsFetched: true,
        news: action.payload,
      };
    case types.NEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
}
