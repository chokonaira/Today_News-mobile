import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

export default function Input({
  placeholder,
  type,
  onChangeText,
  value,
  onEndEditing,
  isValid,
  validationFn,
  ...rest
}) {
  return (
    <>
      <View style={styles.action}>
        <TextInput
          placeholder={placeholder}
          type={type}
          onChangeText={onChangeText}
          value={value}
          onEndEditing={onEndEditing}
          {...rest}
        />
      </View>
      {isValid ? null : (
        <Text testID="errorText" style={styles.errorText}>
          {validationFn}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  errorText: {
    color: "red",
    fontSize: 9,
  },
});
