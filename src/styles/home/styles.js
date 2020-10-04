import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  user: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  bag: {
    marginRight: 15,
    height: 30,
    width: 25,
    alignItems: 'flex-end',
    borderRadius: 5,
  },
  hi: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  today: {
    color : 'rgba(0,0,0,0.4)',
    fontFamily : 'Nunito'
  },
  notifikasi: {
    height: 15,
    width: 15,
    position: 'absolute',
    right: 7,
    top: 10,
  },
  boxCount: {
    height: 15,
    width: 15,
    backgroundColor: '#FF685C',
    borderRadius: 20,
  },
  count: {
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
  boxSearch: {
    height: 48,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // bayangan
    shadowColor: 'black',
    shadowOpacity: 8,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  iconSearch: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginRight: 5,
  },
  help: {
    marginLeft: 19,
    marginTop: 43,
    fontSize: 15,
    fontWeight: '700',
  },
  boxHelp: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    height: 120,
  },
  boxBidget: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius : 10,
    // bayangan
    shadowColor: 'black',
    shadowOpacity: 8,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  tWidget : {
      fontSize : 12
  },
  boxTitle : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
  },
  see : {
      textAlign : 'center',
      marginTop : 10,
      marginRight : 20,
      color : '#384DFE'
  }
});
