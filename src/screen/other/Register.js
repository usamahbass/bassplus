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

const Register = ({navigation}) => {
  const [show, setShow] = React.useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[LoginStyles.container, {justifyContent: 'center'}]}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={LoginStyles.logo}
        />
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
          Register
        </CustomButton>
        <View style={LoginStyles.wrapRegisterAndForgotPassword}>
          <View>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={LoginStyles.register}>
              Already Registered ? Login
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
