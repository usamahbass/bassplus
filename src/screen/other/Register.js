import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {LoginStyles} from '../../styles/login/styles';
import EyePassword from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/customButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Register = ({navigation}) => {
  const [show, setShow] = React.useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[LoginStyles.container, {justifyContent: 'flex-start'}]}>
        <View>
          <Text style={styles.headerTitle}>Register</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.headerDesc}>
              Already have an account? Login
            </Text>
          </Pressable>
        </View>
        <View>
          <Text style={LoginStyles.label}>Email</Text>
          <TextInput
            style={LoginStyles.input}
            keyboardType="email-address"
            placeholder="Enter your email..."
          />
        </View>
        <View>
          <Text style={LoginStyles.label}>Mobile Number</Text>
          <TextInput
            style={LoginStyles.input}
            keyboardType="phone-pad"
            placeholder="8123-456-7890"
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
          Sign Up
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
const styles = StyleSheet.create({
  headerTitle: {
    marginBottom: 13,
    fontFamily: 'Nunito-Bold',
    fontSize: hp('3%'),
  },
  headerDesc: {
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#B0B0B0',
    width: wp('80%'),
  },
});
