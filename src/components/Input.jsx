import React from "react";
import { TextInput } from "react-native";

const Input = ({ placeholder, type, onChangeText, value, ...rest }) => (
  <TextInput
        placeholder={placeholder}
        type={type}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
);
export default Input;
