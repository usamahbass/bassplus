import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/other/Login';
import FirstApp from '../screen/other/firstApp';
import HomeRoute from './homeStack';
import ForgotPassword from '../screen/other/ForgotPassword';
import Register from '../screen/other/Register';
import 'react-native-gesture-handler';

const ScreenStack = createStackNavigator();

const FirstStack = () => {
  return (
    <NavigationContainer>
      <ScreenStack.Navigator>
        <ScreenStack.Screen
          name="FirstApp"
          component={FirstApp}
          options={{headerShown: false}}
        />
        <ScreenStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <ScreenStack.Screen name="Home" component={HomeRoute} />
        <ScreenStack.Screen
          options={{
            headerTitleStyle: {display: 'none'},
            headerStyle: {elevation: 0},
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <ScreenStack.Screen
          options={{headerShown: null}}
          name="Register"
          component={Register}
        />
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
};

export default FirstStack;
