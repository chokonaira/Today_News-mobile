import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/signUp";
import {
  usernameValidation,
  emailValidation,
  passwordValidation,
} from "../helpers/validations";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validUsername, setValidUsername] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPassword, setValidPassword] = React.useState(true);
  const [error, setError] = React.useState(true);

  const dispatch = useDispatch();

  const signupHandler = () => {
    if (error) {
      handleValidUsername(username);
      handleValidEmail(email);
      handleValidPassword(password);
      return;
    } else {
      dispatch(signUp(username, email, password));
    }
  };

  const handleValidUsername = (value) => {
    const errorMessage = usernameValidation(value);
    handleUserInput(errorMessage, setValidUsername);
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
      setError(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <Input
            placeholder="Your Username"
            type="username"
            onChangeText={(username) => {
              setUsername(username);
            }}
            value={username}
            autoCapitalize="none"
            style={styles.textInput}
            onEndEditing={(e) => handleValidUsername(e.nativeEvent.text)}
          />
        </View>

        {validUsername ? null : (
          <Text style={styles.errorText}>{usernameValidation(username)}</Text>
        )}

        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Input
            placeholder="Your Email"
            type="email"
            onChangeText={(email) => setEmail(email)}
            value={email}
            autoCapitalize="none"
            keyboardType={"email-address"}
            style={styles.textInput}
            onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
          />
        </View>

        {validEmail ? null : (
          <Text style={styles.errorText}>{emailValidation(email)}</Text>
        )}

        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <Input
            placeholder="Your Password"
            type="password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            value={password}
            style={styles.textInput}
            onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
          />
        </View>

        {validPassword ? null : (
          <Text style={styles.errorText}>{passwordValidation(password)}</Text>
        )}

        <View style={styles.buttonWrapper}>
          <Button
            title="Sign Up"
            onPress={signupHandler}
            color="#fff"
            size={20}
            style={[
              styles.button,
              { width: "100%", backgroundColor: "#00A6FB" },
            ]}
          />
          <Button
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
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
};

export default SignUp;

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
    flex: 2.3,
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
    fontSize: 18,
    marginTop: 10,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
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
  },
  errorText: {
    color: "red",
    fontSize: 9,
  },
});
