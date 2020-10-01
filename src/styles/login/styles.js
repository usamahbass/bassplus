import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FCFCFC',
  },
  logo: {
    width: 79,
    height: 79,
    left: 148,
  },
  title: {
    top: 20,
    left: 131,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    lineHeight: 21,
  },
  label: {
    top: 50,
    left: 24,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    fontFamily: 'Nunito-Regular',
    color: '#373639',
  },
  input: {
    width: 327,
    height: 48,
    top: 60,
    left: 24,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    shadowRadius: 64,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: 'rgba(0, 0, 0, 0.07)',
  },
  eyePassword: {
    left: 313,
    bottom: 5,
  },
  button: {
    width: 327,
    height: 46,
    top: 24,
    left: 24,
    borderRadius: 6,
    backgroundColor: '#384DFE',
  },
  buttonText: {
    top: 10,
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Nunito-Regular',
    color: '#ffffff',
    textAlign: 'center',
  },
  forgotPassword: {
    top: 50,
    left: 10,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    color: '#B0B0B0',
    textAlign: 'center',
  },
  // separatorContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   top: 100
  // },
  // separator: {
  //   flex: 1,
  //   height: 1,
  //   backgroundColor: "#B0B0B0"
  // },
  // separatorText: {
  //   width: "100%",
  //   color: "#B0B0B0",
  //   textAlign: "center"
  // }
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
});
