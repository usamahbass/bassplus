import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const FirstStep = StyleSheet.create({
  containerApp: {
    flex: 1,
    height: '100%',
    backgroundColor: '#384DFE',
  },
  imageApp: {
    width: wp('100%'),
    height: hp('25%'),
    alignItems: 'center',
    marginTop: hp('20%'),
  },
  wrapText: {
    alignItems: 'center',
  },
  title: {
    width: 219,
    height: 33,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  paragraph: {
    width: 298,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    color: '#ffffff',
  },
  button: {
    width: 223,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#FF685C',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    color: '#ffffff',
    textAlign: 'center',
  },
  wrapBtn: {
    alignItems: 'center',
    marginTop: hp('10%'),
  },
});
