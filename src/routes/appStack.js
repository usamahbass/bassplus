import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screen/other/Login";
import FirstApp from "../screen/other/firstApp";
import HomeRoute from "./homeStack";
import "react-native-gesture-handler";

const ScreenStack = createStackNavigator() 

const FirstStack = () => {
    return (
        <NavigationContainer>
            <ScreenStack.Navigator>
                <ScreenStack.Screen name="FirstApp" component={FirstApp} options={{headerShown: false}} />
                <ScreenStack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <ScreenStack.Screen name="Home" component={HomeRoute} />
            </ScreenStack.Navigator>
        </NavigationContainer>
    )
}

export default FirstStack;