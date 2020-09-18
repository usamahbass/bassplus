import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.buttonStyle} >
                <Text style={props.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;