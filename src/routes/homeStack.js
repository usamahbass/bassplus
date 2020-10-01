import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconBottom from '../components/icons/iconBottom';
import Feed from '../screen/app/Feed';
import History from '../screen/app/History';
import Home from '../screen/app/Home';
import Review from '../screen/app/Review';
import 'react-native-gesture-handler';

const HomeStack = createBottomTabNavigator();

const HomeRoute = () => {
  return (
    <HomeStack.Navigator
      tabBarOptions={{
        activeTintColor: '#384DFE',
        labelStyle: {
          fontSize: 12,
          flex: 0.5,
        },
        style: {
          height: 70,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/home.png')}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/history.png')}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'Feed',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/feed.png')}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Review"
        component={Review}
        options={{
          title: 'Review',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/review.png')}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoute;
