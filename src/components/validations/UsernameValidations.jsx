import React from "react";
import { Text } from "react-native";

const UsernameValidations = ({ userName, style }) => {
  const [usernameError, setUsernameError] = React.useState("");

  const handleValidation = () => {
    const isnum = /^\d+$/.test(userName);
    if (userName.trim() === "") {
      setUsernameError("Username cannot be empty");
    } else if (username.trim().length < 4) {
      setUsernameError("Username must be more than 4 characters");
    } else if (!isnum) {
      setUsernameError("Username cannot be only digits");
    }
    return usernameError;
  };

  return <Text style={style}>{handleValidation}</Text>;
};

export default UsernameValidations;
