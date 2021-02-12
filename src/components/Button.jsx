import React from "react";
import { Button, Text } from "native-base";

const NativeButton = ({ title, onPress, ...rest }) => (
  <Button {...rest} onPress={onPress}>
    <Text>{title}</Text>
  </Button>
);
export default NativeButton;
