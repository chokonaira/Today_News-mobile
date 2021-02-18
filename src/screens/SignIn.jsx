import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/signIn";
import { Text } from "native-base";
import {
  emailValidation,
  passwordValidation,
} from "../helpers/validations";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validCredentials, setValidCredentials] = React.useState({
    validEmail: true,
    validPassword: true,
    hasError: true,
  });

  const dispatch = useDispatch();

  const loginHandler = () => {
     if (validCredentials.hasError) {
      handleValidEmail(email);
      handleValidPassword(password);
    } else {
      console.log('called')
      dispatch(signUp(username, email, password));
      // navigation.navigate("SignIn");
    }
    dispatch(signIn(email, password));
  };

  const handleValidEmail = (value) => {
    const errorMessage = emailValidation(value);
    handleUserInput(errorMessage, validCredentials.validEmail);
  };

  const handleValidPassword = (value) => {
    const errorMessage = passwordValidation(value);
    handleUserInput(errorMessage, validCredentials.validPassword);
  };

  const handleUserInput = (errorMessage, key) => {
    const noErrorMessage = errorMessage === null

    if (noErrorMessage) {
      setValidCredentials({ ...validCredentials, [key]: true, hasError: false });
    } else {
      setValidCredentials({
        ...validCredentials,
        [key]: false,
        hasError: true,
      });
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
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

        {validCredentials.validEmail ? null : (
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

        {validCredentials.validPassword ? null : (
          <Text style={styles.errorText}>{passwordValidation(password)}</Text>
        )}

        <View style={styles.buttonWrapper}>
          <Button
            title="Sign In"
            onPress={loginHandler}
            color="#fff" 
            size={20} 
            style={[styles.button, {width: '100%', backgroundColor: "#00A6FB"}]}
          />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            color="#fff" 
            size={20} 
            color='#00A6FB'
            style={[styles.button, {width: '100%', backgroundColor: "#fff", borderColor: '#00A6FB', borderWidth: 1, marginTop: 15}]}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    flex: 2,
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
    marginTop: 20
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
    flexDirection: "row"
  }
});
