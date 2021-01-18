import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ScheduleStyles = StyleSheet.create({
  content: {
    backgroundColor: '#FCFCFC',
  },
  container: {
    flex: 1,
    marginLeft: wp('5%'),
    marginTop: hp('4%'),
  },
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
  cardList: {
    width: wp('93'),
    height: hp('35%'),
    marginBottom: hp('3%'),
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    padding: 16,
    elevation: 1,
    shadowOffset: {
      width: 7,
      height: 0,
    },
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    marginLeft: wp('3%'),
  },
  cardUsername: {
    fontSize: wp('4.5%'),
    fontFamily: 'Nunito-Bold',
  },
  cardDesc: {
    fontFamily: 'Nunito-Regular',
  },
  cardBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: wp('14%'),
    marginTop: hp('4%'),
    marginBottom: hp('3%'),
  },
  cardBodyDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  cardBodyText: {
    fontFamily: 'Nunito-Regular',
    color: '#b0b0b0',
    marginLeft: wp('3%'),
  },
  separator: {
    width: wp('83%'),
    height: 1,
    backgroundColor: '#b0b0b0',
    opacity: 0.7,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  textTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: wp('3.5%'),
    color: '#b0b0b0',
  },
  textPrice: {
    fontFamily: 'Nunito-Bold',
    color: '#FF685C',
    marginTop: hp('.5%'),
    fontSize: wp('4.5%'),
  },
  button: {
    width: wp('40%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#384DFE',
    borderRadius: 3
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    borderRadius: 2,
  },
});
