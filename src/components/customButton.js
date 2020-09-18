import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => {

  return (
    <View style={props.buttonContainer}>
      <TouchableOpacity
        style={props.buttonStyle}
        onPress={props.onPress}
      >
        <Text style={props.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CustomButton;
