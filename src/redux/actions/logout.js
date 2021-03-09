import * as types from "./types";

const logoutLoading = () => ({
  type: types.AUTH_LOADING,
});
const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logout = (navigation) => (dispatch) => {
  dispatch(logoutSuccess());
  navigation.navigate("Home");
};
