import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from "react-redux"; 
import { signup } from "../redux/actions/signup";

const Signup = () => {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const signupHandler = () => {
    dispatch(signup(email, password));
  };

  return (
    <View style={styles.signup}>
      <Input
        placeholder="userName"
        onChangeText={userName => setUserName(userName)}
        value={userName}
      />
      <Input
        placeholder="email"
        type="email"
        onChangeText={email => setEmail(email)}
        value={email}
        autoCapitalize="none"
        keyboardType={"email-address"}
      />
      <Input
        placeholder="password"
        type="password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        value={password}
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
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});
