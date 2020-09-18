import React from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { LoginStyles } from '../../styles/login/styles';
import Icon from "react-native-vector-icons/Ionicons";

export default function Login() {
    const [show, setShow] = React.useState(true)
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={LoginStyles.container} >
                <Image source={require("../../assets/image/logo.png")} style={LoginStyles.logo} />
                <Text style={LoginStyles.title} >Welcome back!</Text>

                <View>
                    <Text style={LoginStyles.label} >Email</Text>
                    <TextInput style={LoginStyles.input} keyboardType="email-address" placeholder="Enter your email..." />
                </View>

                <View>
                    <Text style={LoginStyles.label} >Password</Text>
                    <TextInput secureTextEntry={show} underlineColorAndroid="transparent" style={LoginStyles.input} placeholder="Enter your password..."  />
                    <TouchableOpacity onPress={() => setShow(!show)} style={LoginStyles.eyePassword} >
                        <Icon name={(show ? "eye-off" : "eye")} size={24} color="#D0C9D6" />
                    </TouchableOpacity>
                </View>
                
            </View>
        </TouchableWithoutFeedback>

    )
}
