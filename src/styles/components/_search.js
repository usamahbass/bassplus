import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SearchStyles = StyleSheet.create({
  boxSearch: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    width: wp('92%'),
    height: 48,
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: hp('7%')
  },
  searchImage: {
    position: 'absolute',
    left: 10,
  },
  inputSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
  },
  settings: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    backgroundColor: '#384DFE',
    width: 38,
    height: 38,
    borderRadius: 5,
  },
});
