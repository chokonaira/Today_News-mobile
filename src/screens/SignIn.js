import React from "react";
import { View, StyleSheet, Alert, Platform, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { signIn } from "../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { emailValidation, passwordValidation } from "../helpers/validations";
import * as types from "../redux/actions/types";

export default function SignIn({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPassword, setValidPassword] = React.useState(true);
  const [InvalidCredentials, setCredentials] = React.useState(true);

  const serverError = useSelector((state) => state.auth.errors);
  const dispatch = useDispatch();

  function loginHandler(){
    if (InvalidCredentials) {
      handleValidEmail(email);
      handleValidPassword(password);
      return;
    } else if (serverError) {
      dispatch({ type: types.DISMISS_AUTH_ERROR });
      return Alert.alert("Invalid credentials", "Please try again", [
        { text: "Okay" },
      ]);
    } else {
      dispatch(signIn(email, password, navigation));
    }
  };

  const handleValidEmail = (value) => {
    const errorMessage = emailValidation(value);
    handleUserInput(errorMessage, setValidEmail);
  };

  const handleValidPassword = (value) => {
    const errorMessage = passwordValidation(value);
    handleUserInput(errorMessage, setValidPassword);
  };

  const handleUserInput = (errorMessage, setState) => {
    if (errorMessage !== null) {
      setState(false);
    } else {
      setState(true);
      setCredentials(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View>
          <Input
            isValid={validEmail}
            validationFn={emailValidation(email)}
            testID="email"
            placeholder="Your Email"
            type="email"
            onChangeText={(email) => setEmail(email)}
            value={email}
            autoCapitalize="none"
            keyboardType={"email-address"}
            style={styles.textInput}
            onBlur={() => handleValidEmail(email)}
          />
        </View>

        <Text style={styles.text_footer}>Password</Text>
        <View>
          <Input
            isValid={validPassword}
            validationFn={passwordValidation(password)}
            testID="password"
            placeholder="Your Password"
            type="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            value={password}
            style={styles.textInput}
            onBlur={() => handleValidPassword(password)}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Sign In"
            onPress={loginHandler}
            color="#fff"
            size={20}
            style={[
              styles.button,
              { width: "100%", backgroundColor: "#00A6FB" },
            ]}
          />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            color="#fff"
            size={20}
            color="#00A6FB"
            style={[
              styles.button,
              {
                width: "100%",
                backgroundColor: "#fff",
                borderColor: "#00A6FB",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A6FB",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 2 : 2.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    marginTop: Platform.OS === "ios" ? 0 : -8,
    paddingLeft: 7,
    color: "#053751",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 50,
    paddingLeft: 10,
    color: "#05375a",
    width: "100%",
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  }
});
