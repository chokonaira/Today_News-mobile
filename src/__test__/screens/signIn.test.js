import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import SignIn from "../../screens/SignIn";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon')

describe("<SignIn />", () => {
  const mockStore = configureStore([]);
  const initialState = {
    auth: {},
  };
  const store = mockStore(initialState);
  it("throws an error for invaid email inout", () => {
    const tree = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    const emailInput = tree.getByTestId("email");

    console.log(emailInput);
  });
});
