import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from "react-redux"; 
import { login } from "../redux/actions/login";

const Login = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const dispatch = useDispatch();
  
    const loginHandler = () => {
      dispatch(login(email, password));
    };
  
  return (
    <View style={styles.login}>
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
        title="Login"
        style={styles.button}
        onPress={loginHandler}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  }
});
