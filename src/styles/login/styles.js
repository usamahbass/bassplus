import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FCFCFC',
  },
  logo: {
    width: 79,
    height: 79,
    top: 39,
    left: 148,
  },
  title: {
    top: 60,
    left: 131,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    lineHeight: 21,
  },
  label: {
    top: 100,
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
    top: 110,
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
    top: 45,
  },
});
