import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {FirstStep} from '../../styles/firstStep/styles';
import SplashScreen from 'react-native-splash-screen';
import CustomButton from '../../components/customButton';

export default function FirstApp({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={FirstStep.containerApp}>
      <Image
        style={FirstStep.imageApp}
        source={require('../../assets/image/medical-team.png')}
      />

      <Text style={FirstStep.title}>Find your specialist!</Text>
      <Text style={FirstStep.paragraph}>
        Now it’s so easy to make an appointment with your doctor
      </Text>
      <CustomButton
        buttonStyle={FirstStep.button}
        buttonText={FirstStep.buttonText}
        onPress={() => navigation.navigate('Login')}>
        Get Started
      </CustomButton>
    </View>
  );
}
