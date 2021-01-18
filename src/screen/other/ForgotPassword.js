import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomButton from '../../components/customButton';
import {LoginStyles} from '../../styles/login/styles';

const ForgotPassword = ({navigation}) => {
  const toast = () => {
    ToastAndroid.show(
      'password telah dikirim ke email jika ada',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <View style={style.container}>
      <View style={style.wrapElements}>
        <View style={style.wrapText}>
          <Text style={style.resetPassword}>Reset Password</Text>
          <Text style={style.desc}>
            Please enter your email below to receive your password reset
            instructions.
          </Text>
        </View>
        <View style={style.wrapInput}>
          <Text style={style.label}>Email:</Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            placeholder="email.."
            style={style.textInput}
            keyboardType="email-address"
            defaultValue="ainara@gmail.com |"
          />
        </View>
        <CustomButton
          onPress={() => {
            toast();
            navigation.navigate('Login');
          }}
          buttonStyle={[LoginStyles.button, style.btn]}
          buttonText={LoginStyles.buttonText}>
          Send Email
        </CustomButton>
      </View>
    </View>
  );
};

export default ForgotPassword;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapText: {
    width: '90%'
  },
  label: {
    fontFamily: 'Nunito-Regular',
  },
  wrapInput: {
    marginTop: hp('5%'),
  },
  textInput: {
    borderWidth: 1,
    width: wp('90%'),
    paddingLeft: hp('1%'),
    height: hp('7%'),
    borderRadius: hp('1%'),
    marginTop: hp('1%'),
    borderColor: '#384DFE',
    shadowOpacity: .7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 2
  },
  btn: {
    left: 0,
  },
  resetPassword: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp('4%'),
    color: '#373639',
  },
  desc: {
    marginTop: hp('2%'),
    fontFamily: 'Nunito-Regular',
    fontSize: hp('2%'),
    color: '#B0B0B0',
    width: wp('80%'),
  },
  wrapElements: {
    alignItems: "center"
  },
});
