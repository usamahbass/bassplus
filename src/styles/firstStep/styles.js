import {StyleSheet} from 'react-native';

export const FirstStep = StyleSheet.create({
  containerApp: {
    height: '100%',
    backgroundColor: '#384DFE',
  },
  title: {
    position: 'absolute',
    width: 219,
    height: 33,
    top: 400,
    left: 75,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  paragraph: {
    position: 'absolute',
    width: 298,
    height: 44,
    left: 39,
    top: 450,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff"
  },
  button: {
    position: "absolute",
    width: 223,
    height: 48,
    top: 520,
    left: 78,
    backgroundColor: "#FF685C",
    borderRadius: 6,
  },
  buttonText: {
      position: "relative",
      top: 10,
      fontSize: 14,
      fontWeight: "600",
      lineHeight: 22,
      color: "#ffffff",
      textAlign: "center",
  }
});
