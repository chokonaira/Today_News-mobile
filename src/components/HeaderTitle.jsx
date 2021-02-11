import React from "react";
import { Image } from "react-native";


export default function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{uri: "https://ichef.bbci.co.uk/images/ic/1200x675/p07kfjyp.jpg"}}
    />
  );
}