import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  header: {
    height: 200,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 8,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 2,
  },
  arrowLeft: {
    height: 24,
    width: 24,
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    marginLeft: 24,
    fontSize: 24,
    marginTop: 20,
  },
  desTitle: {
    fontSize: 15,
    marginLeft: 24,
    color: 'rgba(0,0,0,0.2)',
    fontFamily: 'Nunito-Regular'
  },
  boxUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 10,
  },
  bioUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconUser: {
    height: 40,
    width: 40,
  },
  nameUser: {
    marginLeft: 7,
  },
  tName: {
    fontSize: 13,
    fontWeight: '600',
  },
  status: {
    fontSize: 9,
    color: '#009EB5',
  },
  time: {
    color: 'rgba(0,0,0,0.2)',
  },
  welcome: {
    height: 100,
    margin: 18,
    backgroundColor: 'rgba(255,255,255,0.8)',
    //Bayangan
    shadowColor: 'black',
    shadowOpacity: 8,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 2,
    borderRadius: 10,
  },
  headWelcome: {
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWelcome: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  desWelcome: {
    marginRight: 10,
    marginLeft: 10,
  },
  desTitleWelcome: {
    fontSize: 12,
    fontWeight: '300',
  },
  message: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  tMessage: {
    borderRadius: 7,
    height: 30,
    width: 80,
    justifyContent: 'center',
    backgroundColor: '#FF685C',
  },
  hi: {
    marginLeft: 10,
    color: '#fff',
    textAlignVertical: 'center',
  },
  boxMessage: {
    height: 10,
    width: 5,
    backgroundColor: '#FF685c',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginRight: 10,
  },
  responMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tResponse: {
    borderRadius: 10,
    width: 180,
    height: 50,
    backgroundColor: '#6979F8',
    justifyContent: 'center',
  },
  boxresponse: {
    height: 10,
    width: 6,
    backgroundColor: '#6979F8',
    marginLeft: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 2,
    height: 5,
  },
  
  input : {
     //Bayangan
     shadowColor: 'black',
     shadowOpacity: 8,
     shadowOffset: {
       height: 2,
       width: -2, 
   },
   elevation: 2,
   flexDirection : 'row',
   backgroundColor : '#fff',
   alignItems : 'center',
   justifyContent : 'space-between',
   height : 50,
   borderRadius : 5
  },
  add : {
    height : 30,
    width : 30,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#384DFE',
    marginRight : 5,
    borderRadius : 5
  },

  // search schedulu
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
});
