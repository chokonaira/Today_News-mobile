import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { signup } from '../redux/actions/signup';


const Signup = ({ navigation }) => {
  const [userName, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const onSignup = () => {
    dispatch(signup(email, password));
  }

  return (
    <View style={styles.signup}>
      <TextInput
        placeholder="userName"
        onChange={(event) => setUsername(event.target.value)}
        value={userName}
        onPress={() => navigation.navigate("Login")}
      />
      <TextInput
        placeholder="email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        onPress={() => navigation.navigate("Login")}
      />
      <TextInput
        placeholder="password"
        type='password'
        secureTextEntry={true}
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        primary
        small
        title="SignUp"
        style={styles.button}
        onPress={() => onSignup()}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});
