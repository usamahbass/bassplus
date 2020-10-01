import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import logo from '../../assets/image/logo.png';
import CustomButton from '../../components/customButton';
import {LoginStyles} from '../../styles/login/styles';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const toast = () => {
    ToastAndroid.show(
      'password telah dikirim ke email jika ada',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <View style={style.container}>
      <View style={style.wrapLogo}>
        <Image source={logo} />
      </View>
      <View style={style.wrapInput}>
        <Text style={style.label}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="email.."
          style={style.textInput}
          keyboardType="email-address"
        />
      </View>
      <CustomButton
        onPress={() => {
          toast();
          navigation.navigate('Login');
        }}
        buttonStyle={[LoginStyles.button, style.btn]}
        buttonText={LoginStyles.buttonText}>
        Kirim
      </CustomButton>
    </View>
  );
};

export default ForgotPassword;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapLogo: {
    alignItems: 'center',
    marginTop: hp('20%'),
  },
  label: {
    fontFamily: 'Nunito-Regular',
  },
  wrapInput: {
    marginTop: hp('5%'),
  },
  textInput: {
    borderWidth: 1,
    width: wp('80%'),
    paddingLeft: hp('1%'),
    height: hp('5%'),
    borderRadius: hp('1%'),
    marginTop: hp('1%'),
    borderColor: 'lightgray',
  },
  btn: {
    left: 0,
  },
});
