import React from "react";
import { render, fireEvent, cleanup } from "react-native-testing-library";
import SignIn from "../../screens/SignIn";
import Input from "../../components/Input";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("<SignIn />", () => {
  afterEach(cleanup);
  const mockStore = configureStore([]);
  const initialState = {
    auth: {
      errors: "",
    },
  };
  const store = mockStore(initialState);

  it("throws an error for empty email input", () => {
    const tree = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const emailInput = tree.getByTestId("email");
    fireEvent(emailInput, "blur");
    const errorElement = tree.getByTestId("errorText");
    expect(errorElement.props.children).toEqual("Email cannot be empty");
  });

  it("throws an error for empty password input", () => {
    const tree = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const passwordInput = tree.getByTestId("password");
    fireEvent(passwordInput, "blur");
    const errorElement = tree.getByTestId("errorText");
    expect(errorElement.props.children).toEqual("Password cannot be empty");
  });
});
