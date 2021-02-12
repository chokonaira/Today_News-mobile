import React from "react";
import { Button } from "native-base";
import { Text } from "react-native";

const NativeButton = ({ title, onPress, ...rest }) => (
  <Button {...rest} onPress={onPress}>
    <Text>{title}</Text>
  </Button>
);
export default NativeButton;
