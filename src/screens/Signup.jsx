import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { signup } from "../redux/actions/signup";

const Signup = ({ navigation }) => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const signupHandler = () => {
    dispatch(signup(userName, email, password));
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.signup}>
      <Input
        placeholder="username"
        onChangeText={(userName) => setUserName(userName)}
        value={userName}
        style={styles.inputBox}
        placeholderTextColor = "#ffffff"
      />
      <Input
        placeholder="email"
        type="email"
        onChangeText={(email) => setEmail(email)}
        value={email}
        autoCapitalize="none"
        keyboardType={"email-address"}
        style={styles.inputBox}
        placeholderTextColor = "#ffffff"
      />
      <Input
        placeholder="password"
        type="password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
        style={styles.inputBox}
        placeholderTextColor = "#ffffff"
      />
      <Button
        primary
        small
        title="SignUp"
        style={styles.button}
        onPress={signupHandler}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signup: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputBox: {
    width: 300,
    backgroundColor: "red",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
    padding: 20
  },
  button: {
    alignSelf: "center",
  },
});
