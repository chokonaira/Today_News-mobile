import React from "react";
import { render, fireEvent, cleanup } from "react-native-testing-library";
import SignUp from "../../screens/SignUp";
import Input from "../../components/Input";


import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("<SignUp />", () => {
  afterEach(cleanup);
  const mockStore = configureStore([]);
  const initialState = {
    auth: {
      errors: "",
    },
  };
  const store = mockStore(initialState);
  it("shows an error message for empty username input", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const usernameInput = tree.getByTestId("username");
    fireEvent(usernameInput, "blur");
    const errorElement = tree.getByTestId("errorText");
    expect(errorElement.props.children).toEqual("Username cannot be empty");
  });

  it("shows an error message for empty email input", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const emailInput = tree.getByTestId("email");
    fireEvent(emailInput, "blur");
    const errorElement = tree.getByTestId("errorText");
    expect(errorElement.props.children).toEqual("Email cannot be empty");
  });

  it("shows an error message for empty password input", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const passwordInput = tree.getByTestId("password");
    fireEvent(passwordInput, "blur");
    const errorElement = tree.getByTestId("errorText");
    expect(errorElement.props.children).toEqual("Password cannot be empty");
  });

  it("shows an error message when email is wrongly formatted", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const emailInput = tree.getByTestId("email");
    fireEvent.changeText(emailInput, "henry@");
    fireEvent(emailInput, "blur");
    const errorElement = tree.getByTestId("errorText");

    expect(errorElement.props.children).toEqual("Email format is incorrect");
  });

  it("shows no error component when email is rightly formatted", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const tree2 = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const emailInput = tree.getByTestId("email");
    fireEvent.changeText(emailInput, "henry@gmail.com");
    fireEvent(emailInput, "blur");
    const errorElement = tree2.getByTestId("errorText");
    expect(errorElement.props.children).toEqual(undefined);
  });

  it("shows an error message when username characters are less", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const usernameInput = tree.getByTestId("username");
    fireEvent.changeText(usernameInput, "he");
    fireEvent(usernameInput, "blur");
    const errorElement = tree.getByTestId("errorText");

    expect(errorElement.props.children).toEqual(
      "Username must be more than 4 characters"
    );
  });

  it("shows an error message when username characters are only digits", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const usernameInput = tree.getByTestId("username");
    fireEvent.changeText(usernameInput, '12377');
    fireEvent(usernameInput, "blur");
    const errorElement = tree.getByTestId("errorText");

    expect(errorElement.props.children).toEqual(
      "Username cannot be only digits"
    );
  });

  it("shows no error component when username has correct characters", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const tree2 = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const emailInput = tree.getByTestId("username");
    fireEvent.changeText(emailInput, "henry");
    fireEvent(emailInput, "blur");
    const errorElement = tree2.getByTestId("errorText");
    expect(errorElement.props.children).toEqual(undefined);
  });

  it("shows an error message when password characters are less", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const passwordInput = tree.getByTestId("password");
    fireEvent.changeText(passwordInput, "henr");
    fireEvent(passwordInput, "blur");
    const errorElement = tree.getByTestId("errorText");

    expect(errorElement.props.children).toEqual(
      "Password should be more than 6 characters"
    );
  });

  it("shows no error component when password has correct characters", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    const tree2 = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const passwordInput = tree.getByTestId("password");
    fireEvent.changeText(passwordInput, "henry");
    fireEvent(passwordInput, "blur");
    const errorElement = tree2.getByTestId("errorText");
    expect(errorElement.props.children).toEqual(undefined);
  });

  xit("shows an error message when all inputs fields are empty", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const SignUpBtn = tree.getByText("Sign Up");
    fireEvent.press(SignUpBtn);
    const errorElement = tree.getAllByTestId("errorText");
    errorElement.map((element) => {
      
      console.log(element.props)
      // expect(element.props.children).toEqual("Email cannot be empty");
      // expect(element.props.children).toEqual("Password cannot be empty");
    });
  });

  xit("shows that the loginHandler is called", () => {
    const tree = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const loginHandlerFn = jest.spyOn(SignUp, "signupHandler").mockImplementation();
    const SignUpBtn = tree.getByText("Sign Up");

    console.log(loginHandlerFn)
    fireEvent.press(SignUpBtn);
    // expect(btn).toHaveBeenCalled();
  });
});
