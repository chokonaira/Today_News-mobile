import React from "react";
import { Text } from "react-native";

const PasswordValidations = ({ password, style }) => {
  const [passwordError, setPasswordError] = React.useState("");

  const handleValidation = () => {
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
    } else if (password.trim().length < 6) {
      setPasswordError("Password must be more than 6 characters");
    }
    return passwordError;
  };

  return <Text style={style}>{handleValidation}</Text>;
};

export default PasswordValidations;
