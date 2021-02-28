import news from "../../redux/reducers/news";
import {
  NEWS_LOADING,
  NEWS_SUCCESS,
  NEWS_ERROR,
} from "../../redux/actions/types";

describe("News reducer", () => {
  it("should return the initial state", () => {
    expect(news(undefined, {})).toEqual({
      isLoading: false,
      isNewsFetched: false,
      news: [],
      errors: null,
    });
  });

  it("should return the initial state on start", () => {
    expect(news(undefined, { type: NEWS_LOADING })).toEqual({
      isLoading: true,
      isNewsFetched: false,
      news: [],
      errors: null,
    });
  });

  it("should return the state on success", () => {
    expect(
      news(undefined, {
        type: NEWS_SUCCESS,
        payload: { id: 1 },
      })
    ).toEqual({
      isLoading: false,
      isNewsFetched: true,
      news: { id: 1 },
      errors: null,
    });
  });

  it("should return the state on failure", () => {
    expect(
      news(undefined, {
        type: NEWS_ERROR,
        payload: { message: "Error occured" },
      })
    ).toEqual({
      isLoading: false,
      isNewsFetched: false,
      news: [],
      errors: {
        message: "Error occured",
      },
    });
  });
});
