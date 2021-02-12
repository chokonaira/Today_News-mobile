import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";

const Signup = ({ navigation }) => {
  const [userName, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignup = () => {
    
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
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        onPress={() => navigation.navigate("Login")}
      />
      <TextInput
        placeholder="password"
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
        onPress={() => onSignup("Signup")}
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
