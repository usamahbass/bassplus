import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageUser: {
    width: 35,
    height: 35,
    marginRight: 12,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
  userHelp: {
    color: '#B0B0B0',
    fontFamily: 'Nunito-Regular',
  },
  notification: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 0,
    bottom: 5,
    backgroundColor: '#fff',
  },
  notificationBox: {
    position: 'absolute',
    right: 10,
    top: -10,
    height: 18,
    width: 18,
    backgroundColor: '#FF685C',
    borderRadius: 20,
  },
  notificationCount: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
  boxSearch: {
    flexDirection: 'row',
    position: 'relative',
    left: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    width: 333,
    height: 48,
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
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
  boxHelp: {
    marginTop: 43,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    position: 'absolute',
    top: 0,
    left: 15,
  },
  containerHelp: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#fff',
    shadowOpacity: 0.7,
  },
  boxText: {
    fontSize: 14,
    marginTop: 15.47,
    fontFamily: 'Nunito-Bold',
  },
  boxSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#384DFE',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    position: 'absolute',
    right: 15,
    top: 3,
  },
  containerCategories: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 10,
  },
  boxCategoriesLeft: {
    width: 163,
    height: 163,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#384DFE',
    borderRadius: 12,
  },
  boxCategoriesRight: {
    width: 163,
    height: 163,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF685C',
    borderRadius: 12,
  },
  boxTextWhite: {
    fontSize: 14,
    marginTop: 15.47,
    fontFamily: 'Nunito-Bold',
    lineHeight: 19.1,
    color: '#fff',
  },
});
