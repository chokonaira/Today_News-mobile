import React from "react";
import { TextInput } from "react-native";

const Input = ({ placeholder, type, onChangeText, value, onEndEditing, ...rest }) => (
  <TextInput
        placeholder={placeholder}
        type={type}
        onChangeText={onChangeText}
        value={value}
        onEndEditing={onEndEditing}
        {...rest}
      />
);
export default Input;
