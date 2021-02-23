import auth from "../../redux/reducers/auth";

import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../../redux/actions/types";

describe("Auth user reducer", () => {
  it("should return the initial state", () => {
    expect(auth(undefined, {})).toEqual({
      isLoading: false,
      isAuthenticated: false,
      user: [],
      errors: null,
    });
  });

  it("should return the initial state on start", () => {
    expect(auth(undefined, { type: AUTH_LOADING })).toEqual({
      isLoading: true,
      isAuthenticated: false,
      user: [],
      errors: null,
    });
  });

  it("should return the state on success", () => {
    expect(
      auth(undefined, {
        type: AUTH_SUCCESS,
        payload: { uid: 1 },
      })
    ).toEqual({
      isLoading: false,
      isAuthenticated: true,
      user: { uid: 1 },
      errors: null,
    });
  });

  it("should return the state on failure", () => {
    expect(
      auth(undefined, {
        type: AUTH_ERROR,
        payload: { message: "Error occured" },
      })
    ).toEqual({
      isLoading: false,
      isAuthenticated: false,
      user: [],
      errors: {
        message: "Error occured",
      },
    });
  });
});
