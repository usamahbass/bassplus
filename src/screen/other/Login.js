import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { LoginStyles } from '../../styles/login/styles';
import EyePassword from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/customButton';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Login() {
  const [show, setShow] = React.useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={LoginStyles.container}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={LoginStyles.logo}
        />
        <Text style={LoginStyles.title}>Welcome back!</Text>

        <View>
          <Text style={LoginStyles.label}>Email</Text>
          <TextInput
            style={LoginStyles.input}
            keyboardType="email-address"
            placeholder="Enter your email..."
          />
        </View>

        <View>
          <Text style={LoginStyles.label}>Password</Text>
          <TextInput
            secureTextEntry={show}
            underlineColorAndroid="transparent"
            style={LoginStyles.input}
            placeholder="Enter your password..."
          />
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={LoginStyles.eyePassword}>
            <EyePassword name={show ? 'eye-off' : 'eye'} size={24} color="#D0C9D6" />
          </TouchableOpacity>
        </View>

        <CustomButton
          buttonStyle={LoginStyles.button}
          buttonText={LoginStyles.buttonText}>
          Login
        </CustomButton>

        <View>
            <Text onPress={() => console.log("testing")} style={LoginStyles.forgotPassword}>Forgot Password ?</Text>
        </View>

        {/* <View style={LoginStyles.separatorContainer}>
            <View style={LoginStyles.separator} />
                    <View>
                      <Text style={LoginStyles.separatorText}>Log in with social account</Text>
                    </View>
            <View style={LoginStyles.separator} />
        </View> */}

        <View style={LoginStyles.socialContainer} >
            <CustomButton buttonStyle={LoginStyles.socialButton} buttonText={LoginStyles.socialText} >
                <Icon name="facebook"/>
                Login with Facebook
            </CustomButton>

            <CustomButton buttonStyle={{...LoginStyles.socialButton, ...LoginStyles.socialDanger}} buttonText={LoginStyles.socialText}>
                <Icon name="google"/>
                Login with Google
            </CustomButton>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}
