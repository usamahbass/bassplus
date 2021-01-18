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
import {LoginStyles} from '../../styles/login/styles';
import EyePassword from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/customButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({navigation}) {
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
            <EyePassword
              name={show ? 'eye-off' : 'eye'}
              size={24}
              color="#D0C9D6"
            />
          </TouchableOpacity>
        </View>

        <CustomButton
          onPress={() => navigation.navigate('Home')}
          buttonStyle={LoginStyles.button}
          buttonText={LoginStyles.buttonText}>
          Login
        </CustomButton>

        <View style={LoginStyles.wrapRegisterAndForgotPassword}>
          <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={LoginStyles.forgotPassword}>
            Forget Password ?
          </Text>
        </View>

        <View style={LoginStyles.socialStyles}>
          <Text style={LoginStyles.textSocial}>Log in with social account</Text>

          <View style={LoginStyles.boxSocial}>
            <TouchableOpacity style={LoginStyles.facebookButton}>
              <Image style={LoginStyles.socialIcon} source={require('../../assets/image/facebook-logo.png')} />
              <Text style={LoginStyles.socialsText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={LoginStyles.googleButton}>
              <Image style={LoginStyles.socialIcon} source={require('../../assets/image/google.png')} />
              <Text style={LoginStyles.socialsText}>Google</Text>
            </TouchableOpacity>
          </View>

          <View style={LoginStyles.wrapSignUp}>
            <Text style={LoginStyles.wrapSignUpLeft} >Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")} >
              <Text style={LoginStyles.wrapSignUpRight} >Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
