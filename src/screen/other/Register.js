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

const Register = ({navigation}) => {
  const [show, setShow] = React.useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[LoginStyles.container, {justifyContent: 'flex-start'}]}>
        <View style={{width: wp('80%')}}>
          <Text style={styles.headerTitle}>Register</Text>
          <View style={styles.flexRow}>
            <Text style={styles.headerDesc}>Already have an account? </Text>
            <Text
              style={[styles.headerDesc, styles.headerDescLink]}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Login
            </Text>
          </View>
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
          onPress={() => navigation.navigate('Login')}
          buttonStyle={LoginStyles.button}
          buttonText={LoginStyles.buttonText}>
          Sign Up
        </CustomButton>
        <View>
          <View style={styles.loginSocialContainer}>
            <View style={styles.loginSocialLine} />
            <Text
              style={styles.loginSocialText}
              onPress={() => navigation.navigate('Login')}>
              Log in with social account
            </Text>
            <View style={styles.loginSocialLine} />
          </View>
          <View style={styles.flexRow}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginRight: 8,
                justifyContent: 'center',
              }}>
              <Icon.Button
                style={{
                  width: wp('40%'),
                  height: hp('7%'),
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                name="facebook"
                backgroundColor="#3b5998">
                Facebook
              </Icon.Button>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginRight: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon.Button
                style={{
                  width: wp('40%'),
                  height: hp('7%'),
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                name="google"
                backgroundColor="#EB4132">
                Google
              </Icon.Button>
            </View>
          </View>
        </View>
        <View style={styles.termContainer}>
          <Text style={styles.termText}>
            By clicking sign up you are agreeing to the Term of use and the
            Privacy policy
          </Text>
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
  },
  flexRow: {
    flexDirection: 'row',
  },
  headerDescLink: {
    fontWeight: 'bold',
    color: '#384DFE',
  },
  loginSocialText: {
    fontFamily: 'Nunito-Regular',
    color: '#B0B0B0',
    flex: 3,
    textAlign: 'center',
    fontWeight: '600',
  },
  loginSocialLine: {flex: 1, height: 1, backgroundColor: '#B0B0B0'},
  loginSocialContainer: {
    marginTop: 50,
    marginBottom: 20,
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termContainer: {
    marginVertical: 30,
    width: wp('80%'),
  },
  termText: {
    fontFamily: 'Nunito-Regular',
    color: '#B0B0B0',
    textAlign: 'center',
  },
});
