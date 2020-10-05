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
import {ScrollView} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  const [show, setShow] = React.useState(true);
  return (
    <ScrollView>
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
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
    color: '#B0B0B0',
    flex: 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginSocialLine: {flex: 1, height: 2, backgroundColor: '#B0B0B0'},
  loginSocialContainer: {
    marginTop: 50,
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
