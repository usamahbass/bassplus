import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const LoginStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 79,
    height: 79,
  },
  title: {
    top: 20,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    lineHeight: 21,
  },
  label: {
    top: 50,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Nunito-Bold',
    color: '#373639',
  },
  input: {
    width: 327,
    height: 48,
    top: 60,
    fontSize: 14,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    shadowRadius: 64,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: .7,
    shadowColor: '#000',
    elevation: .3,
  },
  eyePassword: {
    bottom: 5,
    left: 300,
  },
  button: {
    width: 327,
    height: 46,
    top: 24,
    fontSize: 14,
    borderRadius: 6,
    backgroundColor: '#384DFE',
  },
  buttonText: {
    top: 10,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Nunito-Regular',
    color: '#ffffff',
    textAlign: 'center',
  },
  forgotPassword: {
    top: 50,
    fontFamily: 'Nunito-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: '#B0B0B0',
  },
  register: {
    top: 50,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    color: '#B0B0B0',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 8,
  },
  socialButton: {
    width: 151,
    height: 48,
    backgroundColor: '#36589E',
    borderRadius: 6,
  },
  socialText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
  },
  wrapRegisterAndForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('100%'),
  },
  socialStyles: {
    flexDirection: 'column',
    marginTop: 50,
  },
  textSocial: {
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    color: '#B0B0B0',
    marginTop: 38,
  },
  boxSocial: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#36589E',
    width: 151,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#EB4132',
    width: 151,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 13,
  },
  socialIcon: {
    marginTop: 2
  },
  socialsText: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    marginLeft: 9,
  },
  wrapSignUp: {
    marginTop: 32,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 24
  },
  wrapSignUpLeft: {
    color: '#b0b0b0',
    marginRight: 3,
    fontFamily: 'Nunito-Regular'
  },
  wrapSignUpRight: {
    color: '#384DFE',
    fontFamily: 'Nunito-Bold'
  }
});
