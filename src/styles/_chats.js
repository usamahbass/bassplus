import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ChatStyles = StyleSheet.create({
  title: {
    fontSize: wp('7%'),
    fontFamily: 'Nunito-Bold',
  },
  desc: {
    fontFamily: 'Nunito-Regular',
    color: '#b0b0b0',
    fontWeight: '600',
    marginTop: hp('2%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('3%'),
  },
  headerTitle: {
    marginLeft: wp('3%'),
  },
  headerUsername: {
    fontSize: wp('4.5%'),
    fontFamily: 'Nunito-Bold',
    marginBottom: hp('.5%'),
  },
  headerDesc: {
    fontFamily: 'Nunito-Regular',
    color: '#009EB5',
  },
  hero: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp('90%'),
    padding: wp('5%'),
    borderRadius: wp('1.5%'),
  },
  heroTitle: {
    fontFamily: 'Nunito-Bold',
    marginLeft: wp('3%'),
    fontSize: wp('4%'),
  },
  divider: {
    flexDirection: 'column',
    width: wp('83%'),
    height: 1,
    backgroundColor: '#b0b0b0',
    opacity: 0.7,
    marginBottom: hp('2%'),
    marginTop: hp('3%')
  },
  heroText: {
    fontFamily: 'Nunito-Regular',
    fontSize: wp('3.7%'),
    textAlign: 'justify'
  }
});
