import React from "react";
import { TextInput } from "react-native";

export default function Input({
  placeholder,
  type,
  onChangeText,
  value,
  onEndEditing,
  ...rest
}) {
  return (
    <TextInput
      placeholder={placeholder}
      type={type}
      onChangeText={onChangeText}
      value={value}
      onEndEditing={onEndEditing}
      {...rest}
    />
  );
}
