import React from "react";
import { Text } from "react-native";

const EmailValidations = ({ email, style }) => {
  const [emailError, setEmailError] = React.useState("");

  const handleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
    } else if (!emailRegex.test(String(email).toLowerCase())) {
      setEmailError("Email address is badly formatted");
    }
    return emailError;
  };

  return <Text style={style}>{handleValidation}</Text>;
};

export default EmailValidations;
